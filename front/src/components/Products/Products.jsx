import React, {useState} from 'react';
import {fetchProducts} from "../../utils/fetch";

const Products = () => {
    const ar = fetchProducts()
    let dataAr = []
    ar.then((data) => {
        dataAr = data
    })
    const [products, setProducts] = useState(
        dataAr
    )

    return (
        <div>
            {products.map(product =>
                <div>product</div>
            )}
        </div>
    );
};

export default Products;