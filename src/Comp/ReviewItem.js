import React from 'react'

function ReviewItem(props) {
  
    const {name,quantity,key,price}  = props.product
    return (
        <div  style={{borderBottom: "1px  solid lightgray",padding: '15px',marginBottom: "15px"}}>
            <h4> {name}</h4>
    <p>quantity:{quantity}</p>
    <p>${price}</p>
    <button  className="product__button"  onClick={() => props.handleRemove(key)} >Remove</button>
        </div>
    ) 
}

export default ReviewItem
