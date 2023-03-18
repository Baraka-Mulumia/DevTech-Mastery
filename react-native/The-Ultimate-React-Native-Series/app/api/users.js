import apiClient from './client';

const endpoint = '/users';

const register = (userInfo) => apiClient.post(endpoint, userInfo);

const userAPI = {
  register,
};

export default userAPI;
