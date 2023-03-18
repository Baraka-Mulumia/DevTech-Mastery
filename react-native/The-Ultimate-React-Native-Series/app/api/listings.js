import apiClient from './client';
import { uuidv4 } from '../lib/functions';

const endpoint = '/listings';

const getListings = () => apiClient.get(endpoint);

const addListing = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append('title', listing.title);
  data.append('price', listing.price);
  data.append('categoryId', listing.category.value);
  data.append('description', listing.description);

  listing.images.forEach((image, index) =>
    data.append('images', {
      name: 'image' + uuidv4(),
      type: 'image/jpeg',
      uri: image,
    })
  );

  if (listing.location)
    data.append('location', JSON.stringify(listing.location));

  return apiClient.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

const listingAPI = {
  getListings,
  addListing,
};

export default listingAPI;
