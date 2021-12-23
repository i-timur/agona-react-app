import React from 'react';

import './slider.css';

const Slider = (props) => {
  return (
    <div className='slider'>
      <div className='slider__buttons'>
        {props.buttons.map((button, index) => {
          if (index === 0) {
            return (
              <div className='slider__button-wrapper'>
                <button className='slider__button slider__button_active' key={index}>{button}</button>
              </div>
            );
          }
          return (
            <div className='slider__button-wrapper'>
              <button className='slider__button' key={index}>{button}</button>
            </div>
          );
          })}
      </div>
    </div>
  );
};

export default Slider;