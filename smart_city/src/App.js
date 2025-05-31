import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TechCapabilities from './components/TechCapabilities';
import ImplementationIssues from './components/ImplementationIssues';
import ContactForm from './components/ContactForm';
import Gallery from './components/Gallery';
import Modal from './components/Modal';

function App() {
  // Хранит, какая вкладка сейчас активна: 'home', 'tech', 'issues', 'contact', 'gallery'
  const [activeTab, setActiveTab] = useState('home');

  // Состояние модального окна: { isOpen: boolean, message: string, isError: boolean }
  const [modalData, setModalData] = useState({
    isOpen: false,
    message: '',
    isError: false,
  });

  // Функция для открытия модалки
  const openModal = (message, isError = false) => {
    setModalData({ isOpen: true, message, isError });
  };

  // Закрыть модальное окно
  const closeModal = () => {
    setModalData({ ...modalData, isOpen: false });
  };

  // Рендер активного контента
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'tech':
        return <TechCapabilities />;
      case 'issues':
        return <ImplementationIssues />;
      case 'contact':
        return <ContactForm openModal={openModal} />;
      case 'gallery':
        return <Gallery />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="content">{renderContent()}</div>
      {modalData.isOpen && (
        <Modal
          message={modalData.message}
          isError={modalData.isError}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default App;
