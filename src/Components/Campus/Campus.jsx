import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Campus.css';
import i1 from '../../assets/i1.png';
import i2 from '../../assets/i2.png';
import i3 from '../../assets/i3.png';
import i4 from '../../assets/i4.png';
import i5 from '../../assets/i5.jpg';

const Campus = () => {
  const navigate = useNavigate();

  const handleSeeMoreClick = () => {
    navigate('/gallery'); // Navigate to the gallery page
  };

  return (
    <div className="campus">
    <h2>Gallery</h2>
      <div className="gallery">
        <img src={i1} alt="Campus 1" />
        <img src={i2} alt='Campus 2'/>
        <img src={i3} alt="Campus 3" />
        <img src={i4} alt="Campus 4" />
        <img src={i5} alt="Campus 4" />
      </div>
      <button className="btn dark-btn" onClick={handleSeeMoreClick}>
        See more here
      </button>
    </div>
  );
};

export default Campus;
