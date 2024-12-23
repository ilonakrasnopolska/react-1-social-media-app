// Функция для поиска перевода по ключу в объекте с учётом вложенности
const getTranslation = (obj, key) => {
  let result = key; // По умолчанию возвращаем сам ключ

  const formattedKey = String(key).replace(/\s+/g, ""); // Удаляем все пробелы между словами
  // Рекурсивный обход объекта
  const searchRecursively = (currentObj) => {
    for (let k in currentObj) {
      if (currentObj.hasOwnProperty(k)) {
        if (k === formattedKey) {
          result = currentObj[k]; // Если нашли ключ, сохраняем результат
          return;
        }
        // Если текущее значение объекта является объектом, вызываем рекурсивно
        if (typeof currentObj[k] === "object") {
          searchRecursively(currentObj[k]);
        }
      }
    }
  };

  // Запускаем рекурсивный поиск
  searchRecursively(obj);
  return result;
};

export default getTranslation;
