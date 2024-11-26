import React from "react";
import { useNavigate } from "react-router-dom";
import "./Section.css";

const Section = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRoleChange = () => {
    navigate("/darktheme"); // Navigate to the experts subpage
  };
  return (
    <div className="container">
      <div className="circle">
      <div onClick={handleRoleChange} className="linkDiv">
          <p className="text">
            Step Into Well being and be <br /> your true self
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section;