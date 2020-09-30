import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Product from './Comp/Product'

function ProductDetail() {
    const {productkey}  = useParams()
    const [product,setProduct] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/product/${productkey}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[productkey])
    

    return (
        <div>
            <h1>{productkey}Coming soon</h1>
            {/* <Product  showAddToCart ={false} product={Product}  />
             */}
             <Product product={product} showAdd={false}></Product>
        </div>
    ) 
}

export default ProductDetail
