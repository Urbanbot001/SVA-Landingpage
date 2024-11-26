import React, { useState, useEffect } from 'react';
import './RelaxingMusic.css';

const RelaxingMusic = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: 'Yoga.gif', alt: 'Yoga Gif' },
    { src: 'yoga_cta.gif', alt: 'Yoga CTA Gif' },
    { src: 'asset4.png', alt: 'Asset4' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel-container">
      <div className="images-container">
        {images.map((image, index) => (
          <div
            className={`image-wrapper ${
              index === (currentIndex - 1 + images.length) % images.length
                ? 'left'
                : index === currentIndex
                ? 'center'
                : 'right'
            }`}
            key={index}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      <p className="caption">Relaxing Music For Stress & Anxiety</p>
    </div>
  );
};

export default RelaxingMusic;
