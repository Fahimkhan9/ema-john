import React from 'react'
import './Cart.css'

function Cart(props) {
    const cart = props.cart
    const  total = cart.reduce((total,pd) => total + pd.price   ,0)

let shipping = 0
if(total > 35){
    shipping = 0
}
else if (total > 15) {
    shipping = 4.99
} else if(total > 0) {
    shipping = 12.99
}

const tax = (total / 10).toFixed(2)
const grandTotal = (total + shipping + Number(tax) ).toFixed(2)


const formatNumber = num =>{
    const precision = num.toFixed(2)
    return  Number(precision)
}

    return (
        <div>
            <h4>Order summary</h4>
    <p>Items Ordered : {cart.length}</p>
    <p><small>Product price : {formatNumber(total)}</small></p>
    <p><small>Shipping Cost: {shipping}</small></p>
    <p><small>Tax + Vat: {tax}</small></p>
    <p>Total price: {grandTotal}</p>
    <button className="review-btn"> Review Your Order </button>
        </div>
    )
}

export default Cart
