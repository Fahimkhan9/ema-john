import React,{useState} from 'react'
import './Shop.css'

import Product from './Product';
import Cart from './Cart';
import { addToDatabaseCart, getDatabaseCart } from '../utilities/databaseManager';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
function Shop() {
  
   
    const [productArray,setProductArray] = useState([])
    const [cart,setCart] = useState([])


useEffect(() => {
    fetch("https://rocky-castle-19322.herokuapp.com/products")
    .then(res => res.json())
    .then(data => setProductArray(data))
},[])

    useEffect(() =>  {
const savedCart = getDatabaseCart
()

const productKeys = Object.keys(savedCart)
;
if(productArray.length){
    const previousCart = productKeys.map((existingkey) => {
    
        const product = productArray.find(pd => pd.key === existingkey )
       
        product.quantity = savedCart[existingkey]
       
        return product
    

})
 setCart(previousCart)
}

    },[productArray])

const handleAdd =(product) => {
    const toBeAddedKey = product.key
    const sameProduct = cart.find(pd  => pd.key === toBeAddedKey )
    let count = 1
    let newCart
    if(sameProduct){
         count = sameProduct.quantity + 1
        sameProduct.quantity = count
        const others = cart.filter(pd => pd.key !== toBeAddedKey)
        newCart = [...others,sameProduct]
   
    }else{
        product.quantity  = 1
        newCart = [...cart,product]
    }
// const count = sameProduct.length
    // const newCart  =[...cart,product]
setCart(newCart)

addToDatabaseCart(product.key,count)
}

    return (
        <div className="shop">
                <div className="products">
                    {productArray.map((data) => {
                        return <Product product={data} showAdd={true} handleAdd={handleAdd} key={data.key}  />
                    })}
                </div>
                <div className="cart">
                    <Cart cart={cart} />
  <button className="product__button"><NavLink to="/review">Review your order</NavLink>  </button>

                </div>
        </div>
    )
}
   
export default Shop
