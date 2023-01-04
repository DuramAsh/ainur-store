import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
import Selector from "../Selector/Selector"
import classes from './App.module.css';
import Logo from "../Logo/Logo";
import {fetchProducts} from "../../utils/fetch"
import Products from "../Products/Products";


const App = () => {
    return (
        <div className={classes.App}>
            <Logo/>
            <SearchForm/>
            <Selector/>
            <Products/>
            <button onClick={fetchProducts}>GET</button>
        </div>
    );
}

export default App;
