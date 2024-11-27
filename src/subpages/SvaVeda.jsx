import React from 'react';
import './SvaVeda.css';

const SvaVeda = () => {
  return (
    <div className="svaVeda-container">
      <div className="svaVeda-content">
        <div className="image-container">
          <img
            src="path-to-your-image.jpg"
            alt="Meditation"
            className="circle-image"
          />
          <div className="decorative-pattern"></div>
        </div>
        <div className="text-content">
          <h2>What is SvaVeda?</h2>
          <p>
            A digital platform where holistic Experts can showcase their programs & services, allowing Seekers to explore & book their offerings with ease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SvaVeda;
