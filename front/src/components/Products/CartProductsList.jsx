import React from 'react';
import classes from "./ProductsList.module.css";
import CustomButton from "../UI/CustomButton/CustomButton";

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
          <CustomButton onClick={() => onClick(product.id)}>X</CustomButton>
        </div>
      ))}
    </div>
  );
};

export default CartProductsList;