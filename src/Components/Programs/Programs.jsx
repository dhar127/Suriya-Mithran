import React from 'react';
import './Programs.css';
import p1 from '../../assets/p1.jpg';
import p2 from '../../assets/p2.jpg';
import p3 from '../../assets/p3.jpg';
import p4 from '../../assets/p4.jpg';
import p5 from '../../assets/p5.jpg';
import p6 from '../../assets/p6.jpg';

const Programs = () => {
  const images = [p1, p2, p3, p4, p5, p6];

  return (
    <div className="programs">
      <div className="slider">
        {images.map((img, index) => (
          <div className="program" key={index}>
            <img src={img} alt={`Program ${index + 1}`} />
            <div className="caption"></div>
          </div>
        ))}
        {images.map((img, index) => (
          <div className="program" key={`duplicate-${index}`}>
            <img src={img} alt={`Duplicate Program ${index + 1}`} />
            <div className="caption"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
