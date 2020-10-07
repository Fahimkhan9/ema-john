import { CircularProgress } from '@material-ui/core'
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Product from './Comp/Product'

function ProductDetail() {
    const {productkey}  = useParams()
    const [product,setProduct] = useState({})
    const [loading,setLoading] = useState(false)
    useEffect(() => {
        fetch(`https://rocky-castle-19322.herokuapp.com/product/${productkey}`)
        .then(res => res.json())
        .then(data =>{
             setProduct(data)
            setLoading(true)
            })
        document.title = "Product Detail"
    },[productkey])
    

    return (
        <div>
          <Product product={product} showAdd={false}></Product>
           
        </div>
    ) 
}

export default ProductDetail
