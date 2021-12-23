import React from 'react';
import {Link, useLocation} from 'react-router-dom';

import logo from '../../assets/navbar/logo.svg';
import avatar from '../../assets/navbar/avatar.svg';
import "./navbar.css";

const Navbar = () => {
  let location = useLocation();
  const isCollectionPage = location.pathname === '/collection' ? true : false;
  const isAddPage = location.pathname === '/add' ? true : false;
  const isSearchPage = location.pathname === '/search' ? true : false;
  const isProfilePage = location.pathname === '/profile' ? true : false;

  return (
    <header>
      <div className="header-wrapper">
        <div className="left">
          <div className={isCollectionPage ? 'collection collection_active' : 'collection'}>
            <span className={isCollectionPage ? 'collection-icon collection-icon_active' : 'collection-icon'}></span>
            <Link to='/collection' className={isCollectionPage ? 'collection-link collection-link_active' : 'collection-link'}>Коллекция</Link>
          </div>
          <div className={isAddPage ? 'add add_active' : 'add'}>
            <span className={isAddPage ? 'add-icon add-icon_active' : 'add-icon'}></span>
            <Link to='/add' className={isAddPage ? 'add-link add-link_active' : 'add-link'}>Добавить</Link>
          </div>
        </div>
        <img src={logo} alt="logo" className="logo" />
        <div className="right">
          <div className={isSearchPage ? 'search search_active' : 'search'}>
            <span className={isSearchPage ? 'search-icon search-icon_active' : 'search-icon'}></span>
            <Link to='/search' className={isSearchPage ? 'search-link search-link_active' : 'search-link'}>Поиск</Link>
          </div>
          <div className={isProfilePage ? 'avatar avatar_active' : 'avatar'}>
            <Link to='/profile' className="avatar-link"><img src={avatar} alt="avatar" /></Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;