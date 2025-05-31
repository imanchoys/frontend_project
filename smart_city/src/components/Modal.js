import React from 'react';

/**
 * Модальное окно для отображения сообщения об успехе или ошибке.
 * Props:
 *   - message: текст сообщения
 *   - isError: boolean (true, если это сообщение об ошибке)
 *   - onClose: callback для закрытия модального окна
 */
const Modal = ({ message, isError, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{isError ? 'Ошибка' : 'Успех'}</h3>
        <p>{message}</p>
        <button className="close-btn" onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default Modal;
