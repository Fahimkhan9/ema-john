import React,{useState} from 'react'
import './Shop.css'
import fakeData from "../fakeData"
import Product from './Product';
import Cart from './Cart';
import { addToDatabaseCart, getDatabaseCart } from '../utilities/databaseManager';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
function Shop() {
    const f10 = fakeData.slice(0,10)
   
    const [product,setProduct] = useState(f10)
    const [cart,setCart] = useState([])

    useEffect(() =>  {
const savedCart = getDatabaseCart
()
console.log(savedCart);
const productKeys = Object.keys(savedCart)
console.log(productKeys);
const previousCart = productKeys.map((existingkey) => {
    const product = fakeData.find(pd => pd.key === existingkey )
    console.log(product);
    product.quantity = savedCart[existingkey]
    console.log(product.quantity);
    return product
})
 setCart(previousCart)
    },[])

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
                    {f10.map((data) => {
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
