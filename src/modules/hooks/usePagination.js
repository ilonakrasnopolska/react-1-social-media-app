const usePagination = (totalCount, pageSize) => {
  // Если общее количество пользователей равно 0, то пагинация не нужна
  if (totalCount === 0) {
    return { pages: [], pagesCount: 0 };
  }

  // Вычисляем общее количество страниц, округляя результат в большую сторону
  let pagesCount = Math.ceil(totalCount / pageSize);

  // Массив для хранения номеров страниц
  let pages = [];

  // Заполняем массив страниц номерами от 1 до количества страниц
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  // Возвращаем объект с массивом страниц и количеством страниц
  return { pages, pagesCount };
};

export default usePagination;
