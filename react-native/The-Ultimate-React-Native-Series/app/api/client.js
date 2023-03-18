import authStorage from '../auth/storage';
import cacheStorage from '../utility/cache';
import { create } from 'apisauce';
import settings from '../config/settings';

const apiClient = create({
  baseURL: settings.apiURL,
});

// calling protected api endpoints
apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers['x-auth-token'] = authToken;
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  //Before
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cacheStorage.store(url, response.data);
    return response;
  }

  // Server failed or we do not have an internet connection
  const data = await cacheStorage.get(url);

  return data
    ? {
        ok: true,
        data,
      }
    : response;
};

export default apiClient;
