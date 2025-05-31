import React from 'react';

/**
 * Навигационное меню (табы).
 * Props:
 *   - activeTab: текущая активная вкладка (string)
 *   - setActiveTab: функция для смены вкладки (callback)
 */
const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Умный Город</div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <button
              className={`navbar-link ${activeTab === 'home' ? 'active' : ''}`}
              onClick={() => setActiveTab('home')}
            >
              Главная
            </button>
          </li>
          <li className="navbar-item">
            <button
              className={`navbar-link ${activeTab === 'tech' ? 'active' : ''}`}
              onClick={() => setActiveTab('tech')}
            >
              Тех. возможности
            </button>
          </li>
          <li className="navbar-item">
            <button
              className={`navbar-link ${activeTab === 'issues' ? 'active' : ''}`}
              onClick={() => setActiveTab('issues')}
            >
              Проблемы реализации
            </button>
          </li>
          <li className="navbar-item">
            <button
              className={`navbar-link ${activeTab === 'gallery' ? 'active' : ''}`}
              onClick={() => setActiveTab('gallery')}
            >
              Галерея
            </button>
          </li>
          <li className="navbar-item">
            <button
              className={`navbar-link ${activeTab === 'contact' ? 'active' : ''}`}
              onClick={() => setActiveTab('contact')}
            >
              Контакты
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;