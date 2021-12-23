import React from 'react';

import './profile.css';
import {Navbar} from '../../components'

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className='profile-component'>
        <h2 className='profile-component__title'>
          Профиль
        </h2>
        <div className='profile-component__content'>
          <div className='profile-component__upload'>
            <div className='profile-component__upload-wrapper'>
              <span className='profile-component__upload-icon'></span>
              <a href='#' className='profile-component__upload-link'>Загрузить фото</a>
            </div>
          </div>
          <div className='profile-component__info'>
            <div className='profile-component__input-wrapper'>
              <input type='text' placeholder='Имя' />
            </div>
            <div className='profile-component__input-wrapper'>
              <input type='text' placeholder='О себе' />
            </div>
            <div className='profile-component__input-wrapper'>
              <input type='text' placeholder='Любимые жанры' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;