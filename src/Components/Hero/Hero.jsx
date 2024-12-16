import React, { useState, useEffect } from "react";
import "./Hero.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.png";
import image7 from "../../assets/image7.png";
import donationImage from "../../assets/donation_stats.jpg";
import admissionForm from "../../assets/admission_form.pdf";

const images = [image1, image2, image3, image4, image5, image6, image7];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      {/* Catchy Headings */}
      <div className="hero-heading">
        <h1 className="hero-title"><br/><br/>Be the Light in Someone's Life 🌟</h1>
        <p className="hero-subtitle">
          Together, we can bring hope and smiles to those who need it most.
        </p>
      </div>

      {/* Enlarged Rotating Images */}
      <div className="hero-content">
        <div
          className="hero-image"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        />
      </div>

      {/* Donation Information */}
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

      {/* Social Services Programs in Horizontal Layout */}
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

      {/* Admission Form Enquiry */}
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
