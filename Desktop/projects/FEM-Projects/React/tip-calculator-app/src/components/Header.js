import React from 'react';
import imageHeader from '../images/logo.svg';

const Header = () => {
   return (
      <header className="header">
         <img src={imageHeader} alt="Logo" />
      </header>
   );
};

export default Header;
