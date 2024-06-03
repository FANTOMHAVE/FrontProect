import React, { useState, useEffect, useRef } from 'react';

const images = [
  "main1.jpg",
  "main2.jpg",
  "main3.jpg",
  "main4.jpg",
  "main5.jpg",
  "main6.jpg",
  "main7.jpg"
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)),
      4000
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
    <div className="carousel-container" >
      <div  className="carousel-slide" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <img key={index} src={src} alt="" className="carousel-image" />
        ))}
      </div>
      <div className="carousel-buttons">
        <button className="carousel-button" onClick={prevSlide}>&lt;</button>
        <button className="carousel-button" onClick={nextSlide}>&gt;</button>
      </div>
    </div>
    <center>
        <br />
    <p><h3>Клинические маркеты «Aputeka» – это клиники нового поколения, многопрофильные центры здоровья и красоты.</h3></p>
    </center>
    <br/>
    </>
  );
}