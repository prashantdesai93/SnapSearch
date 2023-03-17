import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ImageGrid from './components/ImageGrid';
import ImageModal from './components/ImageModal';
import { fetchImages } from './utils/fetchImages';
import Pagination from 'react-js-pagination';
import Footer from './components/Footer';
import Title from './components/Title';

function App() {
  const [searchImage, setSearchImage] = useState('');
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  const handleSubmit = async () => {
    const imagesData = await fetchImages(searchImage);
    setImages(imagesData.photo);
    setCurrentPage(imagesData.page);
    setTotalItems(imagesData.total);
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
      <div className="content-container">
        <Title />
        <SearchBar searchImage={searchImage} setSearchImage={setSearchImage} onSubmit={handleSubmit} />
        {images.length > 0 ? (
          <ImageGrid images={images} onThumbnailClick={handleThumbnailClick} />
        ) : (
          <div className="placeholder">
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
    </div>
  );
}

export default App;
