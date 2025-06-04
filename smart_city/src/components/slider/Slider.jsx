import { useState, useEffect } from "react";
import "./Slider.css";

const Slider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const prevSlide = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
            setFade(true);
        }, 200);
    };

    const nextSlide = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
            setFade(true);
        }, 200);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="slider">
            <div className={`slider-image ${fade ? "fade-in" : "fade-out"}`}>
                <img src={images[currentIndex]} alt={`Слайд ${currentIndex + 1}`} />
            </div>
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
