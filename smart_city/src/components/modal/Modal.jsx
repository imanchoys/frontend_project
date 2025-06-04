import "./Modal.css";


const Modal = ({ message, isError, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>{isError ? "Ошибка" : "Успех"}</h3>
                <p>{message}</p>
                <button className={`close-btn ${isError ? "error" : "success"}`} onClick={onClose}>
                    Закрыть
                </button>
            </div>
        </div>
    );
};

export default Modal;
