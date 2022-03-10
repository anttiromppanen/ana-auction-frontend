import axios from 'axios';
const baseUrl = '/api/craftables';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getAlchemy = async () => {
  const response = await axios.get(`${baseUrl}/alchemy`);
  return response.data;
};

const getTailoring = async () => {
  const response = await axios.get(`${baseUrl}/tailoring`);
  return response.data;
};

const getUniqueProfessions = async () => {
  const response = await axios.get(`${baseUrl}/professions`);
  return response.data;
};

const getCraftablesByProfessionName = async (professionNameToFilterBy) => {
  const response = await axios.get(
    `${baseUrl}/${professionNameToFilterBy.toLowerCase()}`
  );

  return response.data;
};

export {
  getAll,
  getAlchemy,
  getTailoring,
  getUniqueProfessions,
  getCraftablesByProfessionName,
};
