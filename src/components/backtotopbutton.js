import React from 'react';
import classes from './backtotopbutton.module.css'; // Ensure this path is correct for your project

const ScrollToNavbarButton = () => {
  const scrollToNavbar = () => {
    console.log('bello');

    const navbar = document.getElementById('navbar');
    if (navbar) {
      navbar.scrollIntoView({ behavior: 'smooth' });
      console.log('ello');
      
    }
  };

  return (
    <button onClick={scrollToNavbar} className={classes.button}>
      Back To Top
    </button>
  );
};

export default ScrollToNavbarButton;
