import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Product from './Comp/Product'

function ProductDetail() {
    const {productkey}  = useParams()
    const [product,setProduct] = useState({})
    useEffect(() => {
        fetch(`https://rocky-castle-19322.herokuapp.com/product/${productkey}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[productkey])
    

    return (
        <div>
         
             <Product product={product} showAdd={false}></Product>
        </div>
    ) 
}

export default ProductDetail
