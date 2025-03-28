import { useDispatch } from "react-redux";
import {
  filterFeeds,
  setActiveCategory,
} from "../../redux/FeedsReducer/feeds-reducer";

// Кастомный хук для работы с фильтрацией ленты
export const useFeedsFilter = () => {
  const dispatch = useDispatch(); // Получаем dispatch для отправки действий в Redux

  // Обработчик фильтрации по категории
  const handleCategoryFilter = (title) => {
    // Устанавливаем активную категорию
    dispatch(setActiveCategory(title));
    // Применяем фильтрацию ленты по выбранной категории
    dispatch(filterFeeds(title));
  };

  // Возвращаем функцию фильтрации
  return { handleCategoryFilter };
};
