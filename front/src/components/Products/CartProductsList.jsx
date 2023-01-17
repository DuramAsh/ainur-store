import React, {useState} from 'react';
import classes from "./ProductsList.module.css";

const CartProductsList = ({products, onClick}) => {
  const [count, setCount] = useState(0)
  return (
    <div className={classes.productList}>
      {products.map(product => (
        <div key={product.id} className={classes.product}>
          <h1>{product.id}</h1>
          <h3>{product.title}</h3>
          <img src={product.thumbnailUrl} alt={product.id}></img>
          {count === 0
            ? <h1>Nothing to see</h1>
            : count
          }
          <button onClick={() => onClick(product.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default CartProductsList;