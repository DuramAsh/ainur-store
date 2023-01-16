import React, {useState} from 'react'
import SearchForm from '../SearchForm/SearchForm'
import Selector from "../Selector/Selector"
import classes from './App.module.css';
import Logo from "../Logo/Logo";
import ProductsList from "../Products/ProductsList";
import {Products} from "../../db";


const App = () => {
  const [selectedFilter, setSelectedFilter] = useState("")
  const [products, setProducts] = useState(Products)
  const [filteredProducts, setFilteredProducts] = useState(Products)
  const [formText, setFormText] = useState("")
  
  const filterProducts = (filter) => {
    setSelectedFilter(filter)
    setProducts(products.filter((product) => {
      return true
    }))
  }
  
  const onSearch = (text) => {
    setFormText(text)
    setFilteredProducts(products.filter((product) => {
      return product.title.toLowerCase().includes(text.toLowerCase())
    }))
  }
  
  return (
    <div className={classes.App}>
      <Logo/>
      <SearchForm value={formText} onChange={onSearch}/>
      <Selector value={selectedFilter} onChange={filterProducts}/>
      <ProductsList products={filteredProducts}/>
    </div>
  );
}

export default App;
