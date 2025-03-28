import axios from "axios";

// Функция для выполнения GET-запроса с параметрами
const fetchData = async (url, params = {}) => {
  try {
    // Выполняем GET-запрос с использованием библиотеки axios
    const response = await axios.get(url, { params });

    // Возвращаем данные из ответа
    return response.data;
  } catch (error) {
    // Обработка ошибки, если сервер вернул статус 429 (слишком много запросов)
    if (error.response && error.response.status === 429) {
      console.warn("Слишком много запросов! Ждем 5 секунд...");

      // Ожидаем 5 секунд перед повторным запросом
      await new Promise((resolve) => setTimeout(resolve, 5000));

      // Повторяем запрос после задержки
      return fetchData(url, params);
    }

    // Логируем другие ошибки (например, проблемы с сетью или API)
    console.error("Ошибка загрузки данных:", error);

    // Если ошибка произошла, возвращаем null
    return null;
  }
};

// Экспортируем функцию, чтобы она могла быть использована в других частях приложения
export default fetchData;
