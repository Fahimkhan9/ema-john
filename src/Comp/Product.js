import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Product(props) {
//   console.log(props);
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div className="">
        <img src={img} alt="" className='pd-img' />
      </div>
      <div className="">
        <h4 className="pd-name">{name}</h4>
        <br />
        <p>
          <small>by:{seller} </small>
        </p>
        <p>${price}</p>
        <br />
        <p>
          <small>Only {stock} left in stock - Order soon </small>
        </p>
    <button className="pd-btn" onClick={() => props.handleAddPro(props.product)} ><FontAwesomeIcon icon={faShoppingCart}/>   Add to Cart  </button>
      </div>
    </div>
  );
}

export default Product;
