import React from 'react';
import { Fade } from 'react-slideshow-image';
import './SlideShow.css';
 
const fadeImages = [
  'images/White-and-brown-wooden-1920X480.jpg',
  'images/Brown-and-Gray-PaintedHouse1920x480.jpg',
  'images/White-and-brown-brick-1900x480.jpg'
];
 
const fadeProperties = {
  duration: 5000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    // console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const SlideshowFade = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} alt="House Roof One"/>
          </div>
          {/* <h2>Integrity</h2> */}
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} alt="House Roof Two"/>
          </div>
          {/* <h2>Quality</h2> */}
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} alt="Roof Three"/>
          </div>
          {/* <h2>Durability</h2> */}
        </div>
      </Fade>
    </div>
  )
}

export default SlideshowFade