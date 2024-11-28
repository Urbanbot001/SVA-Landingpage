import React from "react";
import { useNavigate } from "react-router-dom";
import "./WellnessExperts.css";

const WellnessExperts = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRoleChange = () => {
    navigate("/wellnessseekers");
  };

  return (
    <div className="wellness-container">
      <div onClick={handleRoleChange} className="linkDiv">
        <div className="circle-container">
          <img
            src="/yoga_teacher2.jpg" // Replace with your image path
            alt="Wellness Experts"
            className="circle-image"
          />
          <div className="text-overlay">Wellness Experts</div>
        </div>
      </div>
    </div>
  );
};

export default WellnessExperts;
