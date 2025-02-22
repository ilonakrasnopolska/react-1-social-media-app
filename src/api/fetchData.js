import axios from "axios";

const fetchData = async (url, params = {}) => {
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 429) {
      console.warn("Слишком много запросов! Ждем 5 секунд...");
      await new Promise((resolve) => setTimeout(resolve, 5000));
      return fetchData(url, params);
    }

    console.error("Ошибка загрузки данных:", error);
    return null;
  }
};

export default fetchData;
