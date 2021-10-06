import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src='meals.jpg' alt='Meals here' />
      </div>
    </>
  );
};

export default Header;
