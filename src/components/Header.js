import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <input type="text" className="search-bar" placeholder="Search products..." />
      <div className="icons">
        <span className="icon">Profile</span>
        <span className="icon">Cart</span>
      </div>
    </header>
  );
};

export default Header;