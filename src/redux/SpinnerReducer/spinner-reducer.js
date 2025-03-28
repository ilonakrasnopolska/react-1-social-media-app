// Импортируем createSlice из Redux Toolkit для создания слайса
import { createSlice } from "@reduxjs/toolkit";

// Создаем слайс для управления состоянием загрузки
const loadingSlice = createSlice({
  name: "loading", // Имя слайса
  initialState: false, // Начальное состояние (по умолчанию загрузка не активна)
  reducers: {
    // Редьюсер для начала загрузки (меняет состояние на true)
    startLoading: (state) => true,

    // Редьюсер для остановки загрузки (меняет состояние на false)
    stopLoading: (state) => false,
  },
});

// Экспортируем экшены для использования в компонентах
export const { startLoading, stopLoading } = loadingSlice.actions;

// Экспортируем редьюсер для использования в store
export default loadingSlice.reducer;
