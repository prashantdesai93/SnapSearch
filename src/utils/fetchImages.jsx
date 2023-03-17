import axios from 'axios';

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
  }
}
