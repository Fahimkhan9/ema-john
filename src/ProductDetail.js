import React from 'react'
import { useParams, useLocation, useHistory } from 'react-router-dom'
import fakeData from './fakeData'
import Product from './Comp/Product'

function ProductDetail() {
    const {productkey}  = useParams()
    // const {name,img,seller,price,stock,product,key} = props.product
const location = useLocation()
console.log(location.pathname);
const history = useHistory()
console.log(history);
    const product = fakeData.find(pd => pd.key === productkey)
    // console.log(product);
    return (
        <div>
          <button onClick={() => history.push("/")}>Click me</button>
            <h1>{productkey}Coming soon</h1>
            {/* <Product  showAddToCart ={false} product={Product}  />
             */}
             <Product product={product} showAdd={false}></Product>
        </div>
    ) 
}

export default ProductDetail
