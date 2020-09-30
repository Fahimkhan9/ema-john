import React, { useEffect } from 'react'
import { useState } from 'react'
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../utilities/databaseManager'

import ReviewItem from './ReviewItem'
import Cart from './Cart'
import haha from '../images/giphy.gif'
import { useHistory } from 'react-router-dom'
function Review() {
const [cart,setCart]  = useState([])
const [orderPlaces,setOrderPlaced]  = useState(false)
const history = useHistory()
const plcaOrder =() => {
    // console.log("ordered");
    // setCart([])
    // setOrderPlaced(true)
    // processOrder()
    history.push("/shipment")
}

const handleRemove = (productkey) => {
console.log('removed',productkey);
const newCart = cart.filter(pd => pd.key !== productkey)
setCart(newCart)
removeFromDatabaseCart(productkey)
}

useEffect(() => {
 const savedCart =  getDatabaseCart()
 const productKeys = Object.keys(savedCart)

fetch('http://localhost:5000/getfewproductsbykeys',{
    method:"POST",
    headers:{"Content-Type": 'application/json'},
    body:JSON.stringify(productKeys)
})
.then(res => res.json())
.then(data => setCart(data))


},[])
console.log(cart);
let thank 
if(orderPlaces){
thank =  <img src={haha} />
}
    return (
        <div className="shop">
            <div className="products">
            <h1>Cart items: {cart.length}</h1>
            {
                cart.map(pd => <ReviewItem  handleRemove={handleRemove} product={pd} /> )
            }
           {thank}
            </div>
            <div className="cart">
<Cart cart={cart}>

    <button className='product__button' onClick={plcaOrder} >Proceed checkout</button>
</Cart>
            </div>
{/* <ReviewItem/> */}


        </div>
    )
}

export default Review
