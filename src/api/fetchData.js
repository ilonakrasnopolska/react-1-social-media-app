import axios from 'axios';

const fetchData = async (url, params = {}) => {
  return axios
    .get(url, { params })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      return null;
    });
};

export default fetchData;
