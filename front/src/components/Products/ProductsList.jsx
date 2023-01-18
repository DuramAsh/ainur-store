import classes from './ProductsList.module.css'
import React from "react";


const ProductsList = ({products, onClick}) => {
  return (
    <div className={classes.productList}>
      {products.map(product => (
        <div key={product.id} className={classes.product}>
          <img src={product.imgURL} alt={product.id}></img>
          <h3>{product.title}</h3>
          <h3>{["Цена:", product.price, "₸"].join(' ')}</h3>
          <h3>{"Размеры: " + product.sizes}</h3>
          <button onClick={() => onClick(product.id)}>Добавить в корзину</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;