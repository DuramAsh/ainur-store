import classes from './ProductsList.module.css'


const ProductsList = ({products}) => {
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