import { useState } from "react";

// Кастомный хук для управления модальным окном
const useModal = () => {
  // Состояние для отображения/скрытия модального окна
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Состояние для хранения данных, переданных в модальное окно
  const [modalData, setModalData] = useState(null);
  // Состояние для хранения функции, которая будет вызвана при подтверждении действия в модалке
  const [onConfirmCallback, setOnConfirmCallback] = useState(() => () => {});

  /**
   * Открывает модальное окно
   * @param {any} data - Данные, которые нужно передать в модалку (например, ID или объект)
   * @param {Function} onConfirm - Функция, которая выполнится при подтверждении (например, удаление)
   */
  const openModal = (data = null, onConfirm = () => {}) => {
    setModalData(data); // сохраняем переданные данные
    setOnConfirmCallback(() => onConfirm); // сохраняем функцию, которую вызовем при подтверждении
    setIsModalOpen(true); // открываем модалку
  };

  // Закрывает модальное окно и очищает данные
  const closeModal = () => {
    setModalData(null);
    setOnConfirmCallback(() => () => {}); // сбрасываем колбэк на пустую функцию
    setIsModalOpen(false);
  };

  // Подтверждает действие: вызывает сохранённый onConfirm с modalData, затем закрывает модалку
  const confirm = () => {
    onConfirmCallback(modalData);
    closeModal();
  };

  // Возвращаем необходимые значения и функции для использования в компоненте
  return {
    isModalOpen, // флаг отображения модального окна
    modalData, // данные для модалки
    openModal, // функция открытия
    closeModal, // функция закрытия
    confirm, // функция подтверждения
  };
};

export default useModal;
