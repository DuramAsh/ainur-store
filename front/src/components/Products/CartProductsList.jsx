import React from 'react';
import classes from "./ProductsList.module.css";

const CartProductsList = ({products, onClick}) => {
  return (
    <div className={classes.productList}>
      {products.map(product => (
        <div key={product.id} className={classes.product}>
          <img src={product.imgURL} alt={product.id}></img>
          <h3>{product.title}</h3>
          <h3>{["Цена:", product.price, "₸"].join(' ')}</h3>
          <h3>{"Размеры: " + product.sizes}</h3>
          <h4>{"Кол-во: " + product.count}</h4>
          <button onClick={() => onClick(product.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default CartProductsList;