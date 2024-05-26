import React from 'react';
import './Logo.css'

const Logo = ({ size = 100 }) => {
  return (
    <div 
      className="logo-container" 
      style={{ width: size, height: size }}
    >
      <img src="bngnobg.png" alt="Logo" className="logo_png" />
    </div>
  );
};

export default Logo;
