import React from 'react'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {Link}  from 'react-router-dom'
function Product(props) {
 
    const {name,img,seller,price,stock,product,key,quantity} = props.product
    return (
        <div className="product">
            <img src={img} className='product__img' alt=""/>
            <div className="product__details">
    <h5><Link to={"/product/"+key}>{name}</Link></h5>
            <br/>
    <p><small>by {seller}</small></p>
    <p><small>${price}</small></p>
    <p><small>Only {stock} left in stock - order soon</small></p>
{props.showAdd &&      <button  className="product__button" onClick={() =>props.handleAdd(props.product) } ><FontAwesomeIcon icon={faShoppingCart}/>Add to stock</button>}
            </div>
           
        </div>
    )
}

export default Product
