import React from 'react';

import {Navbar} from './../../components/index';
import preview from './../../assets/collection/preview.png';
import './search.css';

const Search = () => {
  return (
    <>
      <Navbar />
      <div className="search-component">
        <h2 className='search-component__title'>
          Поиск
        </h2>
        <div className='search-component__content'>
          <div className='search-component__input-wrapper'>
            <input type='text' placeholder='Введите название фильма, например «Титаник»' className='search-component__input' />
          </div>
          <div className='search-component__row row-search-component'>
            <div className='row-search-component__upper'>
              <h4 className='row-search-component__title'>Рекомендации</h4>
              <a href="#" className='row-search-component__link'>Все</a>
            </div>
            <div className='row-search-component__lower'>
              <div className='row-search-component__items'>
                <div className='row-search-component__item'>
                  <div className='row-search-component__item-wrapper'>
                    <div className='row-search-component__image'>
                      <img src={preview} alt='preview' />
                    </div>
                    <span className='row-search-component__rating'>6.9</span>
                    <p className='row-search-component__name'>Минари</p>
                  </div>
                </div>
                <div className='row-search-component__item'>
                  <div className='row-search-component__item-wrapper'>
                    <div className='row-search-component__image'>
                      <img src={preview} alt='preview' />
                    </div>
                    <span className='row-search-component__rating'>6.9</span>
                    <p className='row-search-component__name'>Минари</p>
                  </div>
                </div>
                <div className='row-search-component__item'>
                  <div className='row-search-component__item-wrapper'>
                    <div className='row-search-component__image'>
                      <img src={preview} alt='preview' />
                    </div>
                    <span className='row-search-component__rating'>6.9</span>
                    <p className='row-search-component__name'>Минари</p>
                  </div>
                </div>
                <div className='row-search-component__item'>
                  <div className='row-search-component__item-wrapper'>
                    <div className='row-search-component__image'>
                      <img src={preview} alt='preview' />
                    </div>
                    <span className='row-search-component__rating'>6.9</span>
                    <p className='row-search-component__name'>Минари</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='search-component__row row-search-component'>
            <div className='row-search-component__upper'>
              <h4 className='row-search-component__title'>Оскар 2021</h4>
              <a href="#" className='row-search-component__link'>Все</a>
            </div>
            <div className='row-search-component__lower'>
              <div className='row-search-component__items'>
                <div className='row-search-component__item'>
                  <div className='row-search-component__item-wrapper'>
                    <div className='row-search-component__image'>
                      <img src={preview} alt='preview' />
                    </div>
                    <span className='row-search-component__rating'>6.9</span>
                    <p className='row-search-component__name'>Минари</p>
                  </div>
                </div>
                <div className='row-search-component__item'>
                  <div className='row-search-component__item-wrapper'>
                    <div className='row-search-component__image'>
                      <img src={preview} alt='preview' />
                    </div>
                    <span className='row-search-component__rating'>6.9</span>
                    <p className='row-search-component__name'>Минари</p>
                  </div>
                </div>
                <div className='row-search-component__item'>
                  <div className='row-search-component__item-wrapper'>
                    <div className='row-search-component__image'>
                      <img src={preview} alt='preview' />
                    </div>
                    <span className='row-search-component__rating'>6.9</span>
                    <p className='row-search-component__name'>Минари</p>
                  </div>
                </div>
                <div className='row-search-component__item'>
                  <div className='row-search-component__item-wrapper'>
                    <div className='row-search-component__image'>
                      <img src={preview} alt='preview' />
                    </div>
                    <span className='row-search-component__rating'>6.9</span>
                    <p className='row-search-component__name'>Минари</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;