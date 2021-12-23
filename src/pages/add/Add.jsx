import React from 'react';

import {Navbar, Slider} from './../../components/index';
import './add.css';

const Add = () => {
  return (
    <>
      <Navbar />
      <div className="add-component">
        <h2 className='add-component__title'>
          О фильме
        </h2>
        <Slider buttons={['КиноПоиск', 'Вручную']} />
        <div className='add-component__content'>
          <h4 className='add-component__subtitle'>
            Название
          </h4>
          <div className='add-component__input-wrapper'>
            <input type='text' placeholder='Например, Титаник' className='add-component__input' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;