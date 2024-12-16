import React, { useState } from 'react';
import './About.css';
import about_img from '../../assets/about.png';

const About = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleImageClick = () => {
    setIsVideoVisible(true);
  };

  return (
    <div className="about">
      <div className="about-left">
        {!isVideoVisible ? (
          <div className="image-container">
            <img
              src={about_img}
              alt="About Us"
              className="about-img"
              onClick={handleImageClick}
            />
            <p className="video-caption">📹 Here's a quick video! Click to watch it now. 👆</p>
          </div>
        ) : (
          <div className="video-container">
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1564202888307506"
              className="video-iframe"
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Facebook Video"
            ></iframe>
          </div>
        )}
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>Empowering Lives, Inspiring Change</h2>
        <p>
          At <strong>Suriyamithran Rehabilitation Centre</strong>, we are dedicated to empowering individuals to overcome life’s challenges and rediscover their full potential. Located in the heart of Thanjavur, our center provides comprehensive support for a wide range of issues, including substance abuse, mental health struggles, and behavioral challenges.
        </p>
        <p>
          We offer a compassionate and holistic approach that integrates professional counseling, medical care, personalized therapies, and community engagement. Whether it's overcoming addiction, managing stress, or seeking mental wellness, we stand by your side every step of the way. Our focus is not just recovery but also building resilience and fostering personal growth.
        </p>
        <p>
          With a team of experienced professionals and a nurturing environment, we believe in creating a safe space where individuals can heal, grow, and thrive. At Suriyamithran, transformation is more than a goal—it’s a promise.
        </p>
        <p>
          Join us on this journey to recovery, empowerment, and a brighter tomorrow. Together, we can overcome any challenge.
        </p>
      </div>
    </div>
  );
};

export default About;
