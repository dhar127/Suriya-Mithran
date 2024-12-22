import React, { useState, useEffect } from "react";
import "./Hero.css";
import Marquee from "react-marquee-slider";
import donationImage from "../../assets/donation_stats.jpg";
import admissionForm from "../../assets/admission_form.pdf";

import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.png";
import image8 from "../../assets/image8.png";

const images = [
  { src: image1, text: "Award for Best Charitable and Rehabilitation Trust in Thanjavur🏆" },
  { src: image2, text: "Providing food for people in need✨" },
  { src: image3, text: "Empowering people for a better tomorrow☘️" },
  { src: image4, text: "Providing safe environment to those in need🍃" },
  { src: image5, text: "Bringing smiles through education programs" },
  { src: image6, text: "Addiction recovery through structured programs🌻" },
  { src: image7, text: "Rehabilitation for a new beginning🍃" },
  { src: image8, text: "Join us in making a difference🏡" },
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const navigateImages = (direction) => {
    setCurrentImageIndex((prevIndex) => {
      if (direction === "next") {
        return (prevIndex + 1) % images.length;
      } else {
        return (prevIndex - 1 + images.length) % images.length;
      }
    });
  };

  return (
    <div className="hero">
      {/* Hero Heading */}
      <br></br>
      <br></br>
      <div className="hero-heading">
        <h1 className="hero-title">Be the Light in Someone's Life🌟</h1>
      </div>

      {/* Styled News Ticker */}
      <div className="styled-news-ticker">
      <div className="marquee-content">
      சென்னை வடபழனி விஜயா பார்க்கில் 21. 12. 2024 அன்று நடைபெற்ற தமிழ்நாடு மது போதை மற்றும் மனநல மையங்கள் நல சங்கத்தின் முதலாம் ஆண்டு விருது வழங்கும் விழாவில் தஞ்சையில் சிறப்பாக வல்லத்தில் செயல்பட்டு வரும் சூரிய மித்ரன் தொண்டு அறக்கட்டளையின் குடி மற்றும் போதை மறுவாழ்வு மையத்திற்கு சிறந்த மையத்திற்கான விருது வழங்கப்பட்டது அவ்விருதை சூரியன் மித்ரன் தொண்டு அறக்கட்டளை நிறுவனர்கள் பொறியாளர் சிவப்பிரகாசம் மற்றும் பொன் மாரியப்பன் ஆகியோர் பெற்றுக் கொண்டனர்.

  </div>
      </div>

      {/* Rotating Images with Overlay Text */}
      <div className="hero-content">
        <button
          className="nav-button prev"
          onClick={() => navigateImages("prev")}
        >
          &#8249;
        </button>
        <button
          className="nav-button next"
          onClick={() => navigateImages("next")}
        >
          &#8250;
        </button>

        <div
          className="hero-image"
          style={{
            backgroundImage: `url(${images[currentImageIndex].src})`,
          }}
        >
          <div className="image-overlay">
            <p>{images[currentImageIndex].text}</p>
          </div>
          </div>
          </div>
          <div className="hero-donation">
        <div className="donation-content">
          <img src={donationImage} alt="Donate Now" className="donation-image" />
          <div className="donation-text">
            <h2>Make a Difference Today</h2>
            <p>
            Be the change you wish to see! Donate today to provide meals, safe shelter, and education to those in need. Together, we can build a brighter future!
            </p>
            {/* <button className="donate-button">Donate Now</button> */}
          </div>
        </div>
      </div>
      <div className="hero-programs">
        <h2 className="programs-title">Our Social Service Initiatives</h2>
        <div className="programs-list-horizontal">
          <span>🌿 Rehabilitation for New Beginnings</span>
          <span>🏡 Shelter & Care for Orphaned Children</span>
          <span>🌻 Old Age Homes - A Place to Feel Loved</span>
          <span>🍃 Empowering Lives with Deaddiction Support</span>
          <span>🛡️ Women Welfare - Because Everyone Deserves Security</span>
        </div>
      </div>
      <div className="admission-enquiry">
        <a
          href={admissionForm}
          target="_blank"
          rel="noopener noreferrer"
          className="blinking-link"
        >
          Download Admission Enquiry Form
        </a>
      </div>
       
      </div>
    
  );
};

export default Hero;
