import { useState } from "react";

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [onConfirmCallback, setOnConfirmCallback] = useState(() => () => {});

  const openModal = (data = null, onConfirm = () => {}) => {
    setModalData(data);
    setOnConfirmCallback(() => onConfirm);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalData(null);
    setOnConfirmCallback(() => () => {});
    setIsModalOpen(false);
  };

  const confirm = () => {
    onConfirmCallback(modalData);
    closeModal();
  };

  return {
    isModalOpen,
    modalData,
    openModal,
    closeModal,
    confirm,
  };
};

export default useModal;
