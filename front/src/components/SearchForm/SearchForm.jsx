import React from 'react';
import classes from './SearchForm.module.css'

const SearchForm = () => {
  return (
    <input className={classes.myInput} type="text" placeholder='Поиск по названию'/>
  );
};

export default SearchForm;