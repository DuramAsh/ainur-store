// import React, {useEffect, useState} from 'react';
// import axios from "axios";
//
// const Product = () => {
//   const [products, setProducts] = useState([])
//   useEffect(() => {
//     const fetchProducts = async () => {
//       const response = await axios.get("https://jsonplaceholder.typicode.com/photos")
//       setProducts(response.data.slice(0, 10))
//     }
//     fetchProducts()
//   }, [setProducts])
//   return (
//     <div key={product.id}>
//       <h1>{product.id}</h1>
//       <h3>{product.title}</h3>
//       <img src={product.thumbnailUrl} alt={product.id}></img>
//     </div>
//   );
// };
//
// export default Product;