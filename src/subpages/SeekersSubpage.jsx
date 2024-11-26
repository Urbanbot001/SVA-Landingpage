import React, { useState, useEffect } from "react";
import RelaxingMusic from './RelaxingMusic';
import RelaxingActivities from './RelaxingActivities';
import styles from "./SeekersSubpage.module.css";
import "./HeroSection.css";

const SeekersSubpage = () => {
  const GroupImages = [
    "group_of_women.png",
    "yoga_teacher.jpg",
    "man_exercising.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const sliderImages = ["group_of_women.png", "teacher.png"];

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const slidingImages = [
    "meditation.png",
    "facial_yoga.jpg",
    "pool_meditation.jpg",
    "meditating_woman2.jpg",
    "meditating_woman.png",
  ];

  const [presentImageIndex, setPresentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % GroupImages.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [GroupImages.length]);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(imageInterval);
  }, [sliderImages.length]);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setPresentImageIndex(
        (prevIndex) => (prevIndex + 1) % slidingImages.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(imageInterval);
  }, [slidingImages.length]);

  return (
    <div className={styles.container}>
      <div className={styles.versatileListings}>
        <div className={styles.content}>
          {/* Left Section with Image and Icons */}
          <div className={styles.leftSection}>
            {/* Circular Outline */}
            <div className={styles.circleOutline}></div>
            <div className={styles.imageWrapper}>
              <img
                src={GroupImages[currentImageIndex]} // Dynamically display the current image
                alt={`Group of women ${currentImageIndex + 1}`}
                className={styles.image}
              />
            </div>
            {/* Circular Icons */}
            <div className={styles.circleIcons}>
              <div className={`${styles.icon} ${styles.iconTop}`}>
                <div className={styles.overlayContainer}>
                  <img
                    src="ellipse 41.png"
                    alt="Ellipse"
                    className={styles.ellipse}
                  />
                  <img
                    src="Component 50.png"
                    alt="Component"
                    className={styles.component}
                  />
                </div>
              </div>
              <div
                style={{
                  position: "relative",
                  width: "120px", // Adjust size as needed
                  height: "120px", // Match width for a perfect circle
                  borderRadius: "50%", // Ensures the container is circular
                  overflow: "hidden", // Hides overflow from child elements
                  marginTop: "6rem", // Moves the entire overlay down
                }}
              >
                <img
                  src="ellipse 40.png"
                  alt="Ellipse"
                  style={{
                    position: "absolute",
                    top: 0, // Moves the ellipse down inside the container
                    left: 0,
                    width: "100%", // Ensures the image fills the container
                    height: "100%", // Matches container dimensions
                    borderRadius: "50%", // Ensures circular shape for the image
                    zIndex: 1, // Places the ellipse below the component
                  }}
                />
                <img
                  src="Component 49.svg"
                  alt="Component"
                  style={{
                    position: "absolute",
                    top: "55%", // Adjust this value to move the component lower
                    left: "50%", // Centers horizontally
                    transform: "translate(-50%, -50%)", // Adjusts position for perfect centering
                    width: "70%", // Adjust relative size of the component
                    height: "70%", // Matches width for proportional scaling
                    zIndex: 2, // Places the component above the ellipse
                  }}
                />
              </div>

              <div className={`${styles.icon} ${styles.iconBottom}`}>
                <div className={styles.overlayContainer}>
                  <img
                    src="ellipse 42.png"
                    alt="Ellipse"
                    className={styles.ellipse}
                  />
                  <img
                    src="Component 48.png"
                    alt="Component"
                    className={styles.component}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section with Text */}
          <div className={styles.rightSection}>
            <h2 className={styles.heading}>Versatile Listings</h2>
            <p className={styles.description}>
              Maximize your impact by presenting all that you offer. Whether you
              practice multiple modalities or run diverse programs like live
              workshops, pre-recorded courses, events, or retreats, SvaVeda
              allows you to list and manage everything in one place. Take it
              easy and leave the rest to us.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.increasedEfficiency}>
        <div className={styles.content}>
          {/* Left Section with Image and Icons */}
          <div className={styles.leftSection}>
            {/* Circular Outline */}
            <div className={styles.circleOutline}></div>
            <div className={styles.imageWrapper}>
              <img
                src={GroupImages[currentImageIndex]} // Dynamically display the current image
                alt={`Group of women ${currentImageIndex + 1}`}
                className={styles.image}
              />
            </div>
            {/* Circular Icons */}
            <div className={styles.circleIcons}>
              <div className={`${styles.icon} ${styles.iconTop}`}>
                <div className={styles.overlayContainer}>
                  <img
                    src="ellipse 41.png"
                    alt="Ellipse"
                    className={styles.ellipse}
                  />
                  <img
                    src="Component 50.png"
                    alt="Component"
                    className={styles.component}
                  />
                </div>
              </div>
              <div
                style={{
                  position: "relative",
                  width: "120px", // Adjust size as needed
                  height: "120px", // Match width for a perfect circle
                  borderRadius: "50%", // Ensures the container is circular
                  overflow: "hidden", // Hides overflow from child elements
                  marginTop: "6rem", // Moves the entire overlay down
                }}
              >
                <img
                  src="ellipse 40.png"
                  alt="Ellipse"
                  style={{
                    position: "absolute",
                    top: 0, // Moves the ellipse down inside the container
                    left: 0,
                    width: "100%", // Ensures the image fills the container
                    height: "100%", // Matches container dimensions
                    borderRadius: "50%", // Ensures circular shape for the image
                    zIndex: 1, // Places the ellipse below the component
                  }}
                />
                <img
                  src="Component 49.svg"
                  alt="Component"
                  style={{
                    position: "absolute",
                    top: "55%", // Adjust this value to move the component lower
                    left: "50%", // Centers horizontally
                    transform: "translate(-50%, -50%)", // Adjusts position for perfect centering
                    width: "70%", // Adjust relative size of the component
                    height: "70%", // Matches width for proportional scaling
                    zIndex: 2, // Places the component above the ellipse
                  }}
                />
              </div>

              <div className={`${styles.icon} ${styles.iconBottom}`}>
                <div className={styles.overlayContainer}>
                  <img
                    src="ellipse 42.png"
                    alt="Ellipse"
                    className={styles.ellipse}
                  />
                  <img
                    src="Component 48.png"
                    alt="Component"
                    className={styles.component}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section with Text */}
          <div className={styles.rightSection}>
            <h2 className={styles.heading}>Increased Efficiency</h2>
            <p className={styles.description}>
              Reduce dependency and save on resources. SvaVeda will minimise
              your need to micro-manage mundane, repetitive tasks, saving you
              time, money and energy. Invest those savings back into your
              passion.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.increasedEfficiency}>
        <div className={styles.content}>
          {/* Left Section with Image and Icons */}
          <div className={styles.leftSection}>
            {/* Circular Outline */}
            <div className={styles.circleOutline}></div>
            <div className={styles.imageWrapper}>
              <img
                src={GroupImages[currentImageIndex]} // Dynamically display the current image
                alt={`Group of women ${currentImageIndex + 1}`}
                className={styles.image}
              />
            </div>
            {/* Circular Icons */}
            <div className={styles.circleIcons}>
              <div className={`${styles.icon} ${styles.iconTop}`}>
                <div className={styles.overlayContainer}>
                  <img
                    src="ellipse 41.png"
                    alt="Ellipse"
                    className={styles.ellipse}
                  />
                  <img
                    src="Component 50.png"
                    alt="Component"
                    className={styles.component}
                  />
                </div>
              </div>
              <div
                style={{
                  position: "relative",
                  width: "120px", // Adjust size as needed
                  height: "120px", // Match width for a perfect circle
                  borderRadius: "50%", // Ensures the container is circular
                  overflow: "hidden", // Hides overflow from child elements
                  marginTop: "6rem", // Moves the entire overlay down
                }}
              >
                <img
                  src="ellipse 40.png"
                  alt="Ellipse"
                  style={{
                    position: "absolute",
                    top: 0, // Moves the ellipse down inside the container
                    left: 0,
                    width: "100%", // Ensures the image fills the container
                    height: "100%", // Matches container dimensions
                    borderRadius: "50%", // Ensures circular shape for the image
                    zIndex: 1, // Places the ellipse below the component
                  }}
                />
                <img
                  src="Component 49.svg"
                  alt="Component"
                  style={{
                    position: "absolute",
                    top: "55%", // Adjust this value to move the component lower
                    left: "50%", // Centers horizontally
                    transform: "translate(-50%, -50%)", // Adjusts position for perfect centering
                    width: "70%", // Adjust relative size of the component
                    height: "70%", // Matches width for proportional scaling
                    zIndex: 2, // Places the component above the ellipse
                  }}
                />
              </div>

              <div className={`${styles.icon} ${styles.iconBottom}`}>
                <div className={styles.overlayContainer}>
                  <img
                    src="ellipse 42.png"
                    alt="Ellipse"
                    className={styles.ellipse}
                  />
                  <img
                    src="Component 48.png"
                    alt="Component"
                    className={styles.component}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section with Text */}
          <div className={styles.rightSection}>
            <h2 className={styles.heading}>Clarity Through Details</h2>
            <p className={styles.description}>
              Present your offerings in the best light. Our platform allows you
              to showcase all programme details in an organised manner, giving
              users a clear understanding of what to expect. Clarity is key to
              making it simpler.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.increasedEfficiency}>
        <div className={styles.content}>
          {/* Left Section with Image and Icons */}
          <div className={styles.leftSection}>
            {/* Circular Outline */}
            <div className={styles.circleOutline}></div>
            <div className={styles.imageWrapper}>
              <img
                src={GroupImages[currentImageIndex]} // Dynamically display the current image
                alt={`Group of women ${currentImageIndex + 1}`}
                className={styles.image}
              />
            </div>
            {/* Circular Icons */}
            <div className={styles.circleIcons}>
              <div className={`${styles.icon} ${styles.iconTop}`}>
                <div className={styles.overlayContainer}>
                  <img
                    src="ellipse 41.png"
                    alt="Ellipse"
                    className={styles.ellipse}
                  />
                  <img
                    src="Component 50.png"
                    alt="Component"
                    className={styles.component}
                  />
                </div>
              </div>
              <div
                style={{
                  position: "relative",
                  width: "120px", // Adjust size as needed
                  height: "120px", // Match width for a perfect circle
                  borderRadius: "50%", // Ensures the container is circular
                  overflow: "hidden", // Hides overflow from child elements
                  marginTop: "6rem", // Moves the entire overlay down
                }}
              >
                <img
                  src="ellipse 40.png"
                  alt="Ellipse"
                  style={{
                    position: "absolute",
                    top: 0, // Moves the ellipse down inside the container
                    left: 0,
                    width: "100%", // Ensures the image fills the container
                    height: "100%", // Matches container dimensions
                    borderRadius: "50%", // Ensures circular shape for the image
                    zIndex: 1, // Places the ellipse below the component
                  }}
                />
                <img
                  src="Component 49.svg"
                  alt="Component"
                  style={{
                    position: "absolute",
                    top: "55%", // Adjust this value to move the component lower
                    left: "50%", // Centers horizontally
                    transform: "translate(-50%, -50%)", // Adjusts position for perfect centering
                    width: "70%", // Adjust relative size of the component
                    height: "70%", // Matches width for proportional scaling
                    zIndex: 2, // Places the component above the ellipse
                  }}
                />
              </div>

              <div className={`${styles.icon} ${styles.iconBottom}`}>
                <div className={styles.overlayContainer}>
                  <img
                    src="ellipse 42.png"
                    alt="Ellipse"
                    className={styles.ellipse}
                  />
                  <img
                    src="Component 48.png"
                    alt="Component"
                    className={styles.component}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section with Text */}
          <div className={styles.rightSection}>
            <h2 className={styles.heading}>Streamlined Process</h2>
            <p className={styles.description}>
              Simplify your operations. Our system ensures a seamless and
              hassle-free process with integrated booking, payments,
              communication and more. Now, you can focus on what you do the
              best.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.increasedEfficiency}>
        <div className={styles.content}>
          {/* Left Section with Image and Icons */}
          <div className={styles.leftSection}>
            {/* Circular Outline */}
            <div className={styles.circleOutline}></div>
            <div className={styles.imageWrapper}>
              <img
                src={GroupImages[currentImageIndex]} // Dynamically display the current image
                alt={`Group of women ${currentImageIndex + 1}`}
                className={styles.image}
              />
            </div>
            {/* Circular Icons */}
            <div className={styles.circleIcons}>
              <div className={`${styles.icon} ${styles.iconTop}`}>
                <div className={styles.overlayContainer}>
                  <img
                    src="ellipse 41.png"
                    alt="Ellipse"
                    className={styles.ellipse}
                  />
                  <img
                    src="Component 50.png"
                    alt="Component"
                    className={styles.component}
                  />
                </div>
              </div>
              <div
                style={{
                  position: "relative",
                  width: "120px", // Adjust size as needed
                  height: "120px", // Match width for a perfect circle
                  borderRadius: "50%", // Ensures the container is circular
                  overflow: "hidden", // Hides overflow from child elements
                  marginTop: "6rem", // Moves the entire overlay down
                }}
              >
                <img
                  src="ellipse 40.png"
                  alt="Ellipse"
                  style={{
                    position: "absolute",
                    top: 0, // Moves the ellipse down inside the container
                    left: 0,
                    width: "100%", // Ensures the image fills the container
                    height: "100%", // Matches container dimensions
                    borderRadius: "50%", // Ensures circular shape for the image
                    zIndex: 1, // Places the ellipse below the component
                  }}
                />
                <img
                  src="Component 49.svg"
                  alt="Component"
                  style={{
                    position: "absolute",
                    top: "55%", // Adjust this value to move the component lower
                    left: "50%", // Centers horizontally
                    transform: "translate(-50%, -50%)", // Adjusts position for perfect centering
                    width: "70%", // Adjust relative size of the component
                    height: "70%", // Matches width for proportional scaling
                    zIndex: 2, // Places the component above the ellipse
                  }}
                />
              </div>

              <div className={`${styles.icon} ${styles.iconBottom}`}>
                <div className={styles.overlayContainer}>
                  <img
                    src="ellipse 42.png"
                    alt="Ellipse"
                    className={styles.ellipse}
                  />
                  <img
                    src="Component 48.png"
                    alt="Component"
                    className={styles.component}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section with Text */}
          <div className={styles.rightSection}>
            <h1 className={styles.heading1}>For Experts</h1>
            <h2 className={styles.heading}>Enhanced Visibility</h2>
            <p className={styles.description}>
              Boost your online presence effortlessly. With dedicated pages for
              your profile and offerings, you'll shine brighter and connect with
              more people. Share your expertise and past events, reaching a
              wider audience with ease.
            </p>
          </div>
        </div>
      </div>
      <div className="expert-seeker-section">
        <div className={styles.imageWrapperExpert}>
          <img
            src={sliderImages[activeImageIndex]} // Dynamically display the current image
            alt={`Sliderimage ${activeImageIndex + 1}`}
            className={styles.sliderImages}
          />
        </div>
        <p className={styles.expertText}>Are You An Expert?</p>
        <div className={styles.imageWrapperSeeker}>
          <img
            src={slidingImages[presentImageIndex]} // Dynamically display the current image
            alt={`Sliding images ${presentImageIndex + 1}`}
            className={styles.slidingImages}
          />
        </div>
        <p className={styles.seekersText}>Are You A Seeker?</p>
      </div>
      <p className="hero-subtitle">Choose Your Path of Evolution With SvaVeda</p>
      <div className="hero-divider">|</div>
      <h1 className="hero-title">Maximizing Value for Experts and Seekers</h1>
      <div>
      <RelaxingMusic />
    </div>
    <p className="hero-subtitle2">Pause and Refresh</p>
      <div className="hero-divider">|</div>
      <h1 className="hero-title">A Brief and Serene Break Can Restore Your Balance and Peace</h1>
      <RelaxingActivities />
    </div>
  );
};

export default SeekersSubpage;
