import React from "react";
import { useNavigate } from "react-router-dom";
import "./WellnessServicestwo.css";

const WellnessServicestwo = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRoleChange = () => {
    navigate("/wellnessservicestwo");
  };
  return (
    <div className="wellness-container">
      <div className="central-background">
      <div onClick={handleRoleChange} className="linkDiv">
  <div className="text-overlay">
    <p>Reiki</p>
  <p>Sound Healing</p>
  <p>Pranic Healing</p>
  <p>Chakra Balancing </p>
  <p>Aura Cleansing </p>
  <p>Quantum Healing</p>
  </div>
</div>
</div>
      <div className="service-item coaching">
        <img src="woman_with_tarots.jpg" alt="Life Coaching" />
        <p>Esoteric Practices</p>
      </div>
      <div className="service-item alternative-medicine">
        <img src="herbs_spices.jpg" alt="Alternative Medicine" />
        <p>Alternative Medicine</p>
      </div>
      <div className="service-item esoteric">
        <img src="stacking_rock.jpg" alt="Esoteric Practices" />
        <p>Mindfulness</p>
      </div>
      <div className="service-item energy-healing">
        <img src="therapist.jpg" alt="Energy Healing" />
        <p>Energy Healing</p>
      </div>
      <div className="service-item mindfulness">
        <img src="active_woman.jpg" alt="Mindfulness" />
        <p>Mind-Body Practices</p>
      </div>
      <div className="service-item mind-body">
        <img src="woman_expressing.jpg" alt="Mind-Body Practices" />
        <p>Life & Wellness Coaching</p>
      </div>
    </div>
  );
};

export default WellnessServicestwo;
