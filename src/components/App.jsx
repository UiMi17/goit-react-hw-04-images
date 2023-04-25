import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [images, setImages] = useState([]);
  const [per_page] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const [isLoadMorePresent, setIsLoadMorePresent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isModalShown, setIsModalShown] = useState();
  const [currentModalImg, setCurrentModalImg] = useState({
    largeImageURL: '',
    tags: '',
  });

  useEffect(() => {
    handleStateUpdate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, currentPage]);

  const getImages = async () => {
    try {
      const API_KEY = '34819242-61fdcfe42d1461d5acd80d71b';

      setLoading(true);
      const response = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`
      );
      return response;
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = ev => {
    ev.preventDefault();

    const inputValue = ev.currentTarget.elements.search.value;

    setQuery(inputValue);
    setImages([]);
    setCurrentPage(1);
  };

  const handleLoadMoreBtnClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleModalOpen = (largeImageURL, tags) => {
    setCurrentModalImg({ largeImageURL, tags });
    setIsModalShown(true);
  };

  const handleModalClose = ev => {
    if (ev.code === 'Escape' || ev.target === ev.currentTarget) {
      setIsModalShown(false);
    }
  };

  const handleStateUpdate = async () => {
    const fetchedImages = await getImages();

    setImages([...images, ...fetchedImages.data.hits]);
    if (fetchedImages.data.hits.length === 0) {
      setIsLoadMorePresent(false);
      toast.warning("Sorry, there's no images found!");
    } else if (
      fetchedImages.data.hits.length < per_page ||
      fetchedImages.data.totalHits <= per_page
    ) {
      setIsLoadMorePresent(false);
      toast.warning("You've reached the end of search results!");
    } else {
      setIsLoadMorePresent(true);
    }
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery images={images} handleModalOpen={handleModalOpen} />
      {loading && <Loader />}
      {!loading && isLoadMorePresent && (
        <Button handleLoadMoreBtnClick={handleLoadMoreBtnClick} />
      )}
      {isModalShown && (
        <Modal image={currentModalImg} handleModalClose={handleModalClose} />
      )}
      <ToastContainer />
    </>
  );
};
