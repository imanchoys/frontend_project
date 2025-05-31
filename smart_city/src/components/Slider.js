import React, { useState, useEffect } from 'react';

/**
 * Компонент слайдера изображений.
 * Props:
 *   - images: массив строк URL-адресов изображений
 */
const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Функция для перехода к предыдущему изображению
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Функция для перехода к следующему изображению
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Пример автоматической смены каждые 5 секунд (опционально)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]); // Если currentIndex меняется, сбрасываем таймер

  return (
    <div className="slider">
      <img src={images[currentIndex]} alt={`Слайд ${currentIndex + 1}`} />
      <button className="slider-button left" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="slider-button right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
