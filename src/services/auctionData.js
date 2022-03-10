import axios from 'axios';
const baseUrl = '/api/auctiondata';

const getAll = () => {
  return axios.get(baseUrl);
};

export default { getAll };
