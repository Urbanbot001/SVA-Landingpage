import React from "react";
import "./WellnessExperts.css";

const WellnessExperts = () => {
  return (
    <div className="wellness-container">
        
      <div className="circle-container">
      
        <img
          src="/yoga_teacher2.jpg" // Replace with your image path
          alt="Wellness Experts"
          className="circle-image"
        />
        <div className="text-overlay">Wellness Experts</div>
      </div>
    </div>
  );
};

export default WellnessExperts;
