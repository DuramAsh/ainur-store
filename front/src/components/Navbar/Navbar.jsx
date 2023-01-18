import React from 'react';
import classes from './Navbar.module.css'
import Logo from "../Logo/Logo";
import CustomButton from "../UI/CustomButton/CustomButton";

const Navbar = ({onClick}) => {
  return (
    <div className={classes.navbar}>
      <Logo/>
      <CustomButton onClick={() => onClick()}>Корзина</CustomButton>
    </div>
  );
};

export default Navbar;