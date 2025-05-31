import React from 'react';
import Slider from './Slider';

/**
 * Компонент «Галерея»: содержит заголовок и компонент Slider.
 * Здесь можно указать массив ссылок на изображения, относящихся к «умному городу».
 */
const Gallery = () => {
  // Массив URL-адресов изображений (можно заменить на реальные)
  const images = [
    'https://via.placeholder.com/800x450?text=Умный+Город+1',
    'https://via.placeholder.com/800x450?text=Умный+Город+2',
    'https://via.placeholder.com/800x450?text=Умный+Город+3',
    'https://via.placeholder.com/800x450?text=Умный+Город+4',
  ];

  return (
    <section className="section">
      <h2>Галерея</h2>
      <div className="gallery-container">
        <Slider images={images} />
      </div>
    </section>
  );
};

export default Gallery;
