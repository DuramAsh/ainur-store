import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
import Selector from "../Selector/Selector"
import classes from './App.module.css';
import Logo from "../Logo/Logo";
import ProductsList from "../Products/ProductsList";


const App = () => {
  return (
    <div className={classes.App}>
      <Logo/>
      <SearchForm/>
      <Selector/>
      <ProductsList/>
    </div>
  );
}

export default App;
