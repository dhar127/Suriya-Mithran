import React, { useState } from 'react';
import './Campus.css';
import i1 from '../../assets/i1.png';
import i2 from '../../assets/i2.png';
import i3 from '../../assets/i3.png';
import i4 from '../../assets/i4.png';
import i5 from '../../assets/i5.jpg';
import i6 from '../../assets/i6.jpg';
import i7 from '../../assets/i7.jpg';
import i8 from '../../assets/i8.jpg';
import i9 from '../../assets/i9.jpg';
import i10 from '../../assets/i10.jpg';
import i11 from '../../assets/i11.jpg';
import i12 from '../../assets/i12.jpg';
import i13 from '../../assets/i13.jpg';
import i14 from '../../assets/i14.jpg';
import i15 from '../../assets/i15.jpg';
const CampusGallery = () => {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div className="campus">
      {!showGallery ? (
        <div className="main-content">
          <h2>Welcome to Our Trust</h2>
          <p>
            Explore the vibrant environment through our
            gallery. Click the button below to see more!
          </p>
          <button
            className="view-gallery-btn"
            onClick={() => setShowGallery(true)}
          >
            View Gallery
          </button>
        </div>
      ) : (
        <div>
          <h2>Gallery</h2>
          <div className="gallery">
            <img src={i1} alt="Campus 1" />
            <img src={i2} alt="Campus 2" />
            <img src={i3} alt="Campus 3" />
            <img src={i4} alt="Campus 4" />
            <img src={i5} alt="Campus 5" />
            <img src={i6} alt="Campus 6" />
            <img src={i7} alt="Campus 7" />
            <img src={i8} alt="Campus 8" />
            <img src={i9} alt="Campus 9" />
            <img src={i10} alt="Campus 10" />
            <img src={i11} alt="Campus 11" />
            <img src={i12} alt="Campus 12" />
            <img src={i13} alt="Campus 13" />
            <img src={i14} alt="Campus 14" />
            <img src={i15} alt="Campus 15" />
          </div>
          <button
            className="less-btn"
            onClick={() => setShowGallery(false)}
          >
            Less
          </button>
        </div>
      )}
    </div>
  );
};

export default CampusGallery;
