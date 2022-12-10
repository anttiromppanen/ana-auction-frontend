import axios from 'axios';
const baseUrl = '/api/users';

const createUser = async (user) => {
  const response = await axios.post(baseUrl, user);
  return response.data;
};

const addFavorite = async (username, itemID) => {
  const response = await axios.post(`${baseUrl}/add-favorite`, {
    username,
    itemID,
  });
  
  return response.data;
};

const removeFavorite = async (username, itemID) => {
  const response = await axios.post(`${baseUrl}/remove-favorite`, {
    username,
    itemID,
  });

  return response.data;
};

export { createUser, addFavorite, removeFavorite };
