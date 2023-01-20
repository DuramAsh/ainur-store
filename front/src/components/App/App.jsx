import React, {useEffect, useState} from 'react'
import SearchForm from '../UI/SearchForm/SearchForm'
import Selector from "../Selector/Selector"
import classes from './App.module.css';
import ProductsList from "../Products/ProductsList";
import {Products} from "../../db";
import Navbar from "../Navbar/Navbar";
import Modal from "../Modal/Modal";


const App = () => {
  const [selectedFilter, setSelectedFilter] = useState("Все товары")
  const [products, setProducts] = useState(Products)
  const [query, setQuery] = useState("")
  const [cart, setCart] = useState([])
  const [modal, setModal] = useState(false)
  
  useEffect(() => {
    const twoFilters = () => {
      setProducts(Products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()) && product.categories.includes(selectedFilter)))
    }
    setTimeout(() => {
      twoFilters()
    }, 100)
  }, [selectedFilter, query])
  
  const addToCart = (productId) => {
    if (cart.findIndex(product => product.id === productId) === -1)
      setCart([...cart, Products.filter(product2 => productId === product2.id)[0]])
  }
  
  const deleteFromCart = (productId) => {
    setCart(cart.filter(product => productId !== product.id))
  }
  
  return (
    <div className={classes.App}>x
      <Navbar onClick={() => setModal(true)}/>
      <Modal visible={modal} setVisible={setModal} cart={cart} deleteFromCart={deleteFromCart}></Modal>
      <SearchForm value={query} onChange={setQuery}/>
      <Selector value={selectedFilter} onChange={setSelectedFilter}/>
      <ProductsList products={products} onClick={addToCart}/>
    </div>
  );
}

export default App;
