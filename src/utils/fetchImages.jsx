import axios from 'axios';

// This module exports a function that makes an API call to Flickr to search for images based on a search term and page number.
// It uses the Flickr API key provided in the .env file and returns a Promise that resolves with the response data or rejects with an error message.

const FLICKR_API_KEY = '5993c3195d235237e96a644eb1f75c2b';

export async function fetchImages(searchImage, page = 1) {
  try {
    const response = await axios.get('https://api.flickr.com/services/rest/', {
      params: {
        method: 'flickr.photos.search',
        api_key: FLICKR_API_KEY,
        text: searchImage,
        format: 'json',
        nojsoncallback: 1,
        per_page: 9,
        page: page,
      },
    });

    return response.data.photos;
  } catch (error) {
    console.error(error);
    throw new Error('Something went wrong. Please try again after some time...');
  }
}
