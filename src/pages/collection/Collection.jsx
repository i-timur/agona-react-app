import React from 'react';

import {Navbar, Slider} from '../../components';
import {FilmStore} from '../../stores/FilmStore';
import preview from '../../assets/collection/preview.png';
import './collections.css';

const filmStore = new FilmStore();

const Collection = () => {
  return (
    <>
      <Navbar />
      <div className='collection-component'>
        <h2 className="collection-component__title">
          Коллекция
        </h2>
        <div className="collection-component__menu">
          <Slider buttons={['Буду смотреть', 'Просмотрено']} />
          <span className="collection-component__list-icon"></span>
        </div>
        <div className='collection-component__content'>
          <div className='collection-component__items'>
            {filmStore.getAllFilms().map((film) =>
              <div className="collection-component__item">
                <div className="collection-component__item-wrapper">
                  <div className="collection-component__image">
                    <img src={preview} alt='preview' />
                  </div>
                  <span className='collection-component__rating'>{film.rating}</span>
                  <p className="collection-component__name">{film.name}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;