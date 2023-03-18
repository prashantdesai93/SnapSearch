import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ImageGrid from './components/ImageGrid';
import ImageModal from './components/ImageModal';
import { fetchImages } from './utils/FetchImages';
import Pagination from 'react-js-pagination';
import Footer from './components/Footer';
import Title from './components/Title';
import ErrorBoundary from './components/ErrorBoundary';

// This component is the main entry point for the application.
// It manages the state for the search term, image grid, current page number, total number of pages, and error messages.
// This component also handles the search event by calling the fetchImages function and updating the state with the response data.
// It passes the image data to the ImageGrid component for rendering and handles the click event on each thumbnail image by opening a modal dialog.
// This component also includes the Pagination component for navigating between pages of images.

function App() {
  const [searchImage, setSearchImage] = useState('');
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      const imagesData = await fetchImages(searchImage, setError);
      setError('');
      setImages(imagesData.photo);
      setCurrentPage(imagesData.page);
      setTotalItems(imagesData.total);
    } catch (error) {
      setError(error.message);
      setImages([]);
      setCurrentPage(1);
      setTotalItems(0);
    }
  };

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
  };

  const handlePagination = async (newPage) => {
    setCurrentPage(newPage);
    const imagesData = await fetchImages(searchImage, newPage);
    setImages(imagesData.photo);
  };

  return (
    <div className="App">
      <ErrorBoundary>
        <div className="content-container">
          <Title />
          <SearchBar searchImage={searchImage} setSearchImage={setSearchImage} onSubmit={handleSubmit} />
          {error && <div className="error-message">{error}</div>}
          {images.length > 0 ? (
            <ImageGrid images={images} onThumbnailClick={handleThumbnailClick} />
          ) : (
            !error && <div className="placeholder">
              <h3>Search for images to display them here</h3>
            </div>
          )}
          {selectedImage && <ImageModal image={selectedImage} onClose={handleModalClose} />}
          {images.length > 0 && (
            <div className="pagination-container">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={9}
                totalItemsCount={parseInt(totalItems)}
                pageRangeDisplayed={5}
                onChange={handlePagination}
              />
            </div>
          )}
        </div>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
