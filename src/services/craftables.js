import axios from "axios";
const baseUrl = "http://localhost:3001/api/craftables";

const getAll = () => {
  return axios.get(baseUrl);
};

export default { getAll };
