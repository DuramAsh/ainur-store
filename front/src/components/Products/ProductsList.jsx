import React, {useEffect, useState} from 'react';
import axios from "axios";
import classes from './ProductsList.module.css'


const ProductsList = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/photos")
      setProducts(response.data.slice(0, 100))
    }
    fetchProducts()
  }, [setProducts])
  
  return (
    <div className={classes.productList}>
      {products.map(product => (
        <div key={product.id} className={classes.product}>
          <h1>{product.id}</h1>
          <h3>{product.title}</h3>
          <img src={product.thumbnailUrl} alt={product.id}></img>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;