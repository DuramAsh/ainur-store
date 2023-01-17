import React from 'react';
import classes from './Navbar.module.css'
import Logo from "../Logo/Logo";

const Navbar = ({onClick}) => {
  return (
    <div className={classes.navbar}>
      <Logo/>
      <button onClick={() => onClick()}>Корзина</button>
    </div>
  );
};

export default Navbar;