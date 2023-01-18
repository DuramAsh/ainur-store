import React, {useEffect, useState} from 'react'
import SearchForm from '../SearchForm/SearchForm'
import Selector from "../Selector/Selector"
import classes from './App.module.css';
import ProductsList from "../Products/ProductsList";
import {Products} from "../../db";
import Navbar from "../Navbar/Navbar";
import Modal from "../Modal/Modal";
import CartProductsList from "../Products/CartProductsList";


const App = () => {
  
  const WHATSAPP_LINK = 'https://api.whatsapp.com/send/?phone=77775725184&text=Здравствуйте%21+Я+хотел+бы+сделать+заказ%3A%0D%0A1.+aaa%0D%0A2.+bbb%0D%0A3.+ccc&type=phone_number&app_absent=0'
  
  const [selectedFilter, setSelectedFilter] = useState("")
  const [products, setProducts] = useState(Products)
  const [query, setQuery] = useState("")
  const [cart, setCart] = useState([])
  const [modal, setModal] = useState(false)
  
  useEffect(() => {
    const twoFilters = () => {
      setProducts(Products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()) && product.categories.includes(selectedFilter)))
    }
    twoFilters()
  }, [selectedFilter, query])
  
  const addToCart = (productId) => {
    let ind = cart.findIndex(product => productId === product.id)
    if (ind > -1) {
      cart[ind].count += 1
      setCart([...cart.filter(product => product.id !== productId), cart[ind]])
    } else {
      setCart([...cart, Products.filter(product => productId === product.id)[0]])
    }
    console.log(Products)
  }
  
  const deleteFromCart = (productId) => {
    let ind = cart.findIndex(product => productId === product.id)
    cart[ind].count = 1
    setCart(cart.filter(product => productId !== product.id))
  }
  
  return (
    <div className={classes.App}>
      <Navbar onClick={() => setModal(true)}/>
      <Modal visible={modal} setVisible={setModal}>
        <button onClick={() => setModal(false)}>Close</button>
        <button onClick={() => {
          window.open(WHATSAPP_LINK, '_blank')
        }
        }>Ватс
        </button>
        <CartProductsList products={cart} onClick={deleteFromCart}/>
      </Modal>
      <SearchForm value={query} onChange={setQuery}/>
      <Selector value={selectedFilter} onChange={setSelectedFilter}/>
      <ProductsList products={products} onClick={addToCart}/>
    </div>
  );
}

export default App;
