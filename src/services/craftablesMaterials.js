import axios from 'axios';
const baseUrl = '/api/materials';

const getOne = async (id, material) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  const newMaterial = {
    id: response.data[0].id,
    name: response.data[0].name,
    amount: Object.values(material)[0],
  };

  return newMaterial;
}

export { getOne };