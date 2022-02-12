import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/craftables';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getAlchemy = async () => {
  const response = await axios.get(`${baseUrl}/alchemy`);
  return response.data;
};

export { getAll, getAlchemy };
