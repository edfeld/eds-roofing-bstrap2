import React from 'react';
import { Slide } from 'react-slideshow-image';
import './SlideShow.css';
 
const slideImages = [
  'images/GlobalradioOutreachImg2.jpg',
  'images/GlobalradioOutreachImg3.jpg',
  'images/GlobalradioOutreachImg4.jpg'
];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const SlideshowSlide = () => {
    return (
      <div className="slide-container p-3">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`, height: 340 }}>
              {/* <span>Slide 1</span> */}
            </div>
          </div>
          <div className="each-slide ">
            <div style={{'backgroundImage': `url(${slideImages[1]})`, height: 340 }}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`, height: 340 }}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default SlideshowSlide