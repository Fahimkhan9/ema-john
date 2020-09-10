import React from "react";
import "./Cart.css";

function Cart(props) {       
  const cart = props.cart;
  // let total = cart.reduce((total, data) => ((total + data.price)*data.quantity), 0);
  
  // console.log(total);
  let total =  0 
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total  =  total + product.price * product.quantity
    
    
  }
  let shipping = 0
  if (total > 35) {
      shipping = 0
  } else if(total > 15) {
      shipping = 4.99
  }else if(total > 0){
      shipping = 12.99
  }

  let tax = total / 10
let grandTotal = total + shipping + tax
  const formatNum =(num) => {
      let pre = num.toFixed(2)
      return Number(pre)
  }
  return (
    <div className="cart">
      <h3>Order summary</h3>
      <p>Items Oredered:{cart.length}</p>
  <p>Product price: {formatNum(total)}</p>
  <p>Shipping Cost : {shipping}</p>
  <p>Tax +  vat : {formatNum(tax)}</p>
  <p>Total price: {formatNum(grandTotal)}</p>
  {
    props.children
  }
    </div>
  );
}

export default Cart;
