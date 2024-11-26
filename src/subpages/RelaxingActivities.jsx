import React from 'react';
import './RelaxingActivities.css';

const RelaxingActivities = () => {
  const images = [
    { src: 'image1.jpg', alt: 'Working and Relaxing' },
    { src: 'image2.jpg', alt: 'Meditation with Candles' },
    { src: 'image3.jpg', alt: 'Spa Massage' },
    { src: 'image4.jpg', alt: 'Outdoor Yoga' },
  ];

  return (
    <div className="carousel-containerA">
      <div className="images-containerA">
        {images.map((image, index) => (
          <div className="image-wrapperA" key={index}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelaxingActivities;
