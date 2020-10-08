import React, { useState,useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { UserContext } from '../App';
import { getDatabaseCart, processOrder } from '../utilities/databaseManager';
import ProcessPayment from './ProcessPayment';

function Shipment() {
    const { register, handleSubmit, watch, errors } = useForm();
    
const [loggedinUser,setLoggedinUser]  =  useContext(UserContext)
const [shippingData,setShippingData] = useState(null)
// const [pro,setPro] = useState([])
// const [filter,setFilter] = useState('')

// useEffect(() => {
//   fetch(`http://localhost:5000/products?filter=${filter}`)
//   .then(res => res.json())
//   .then(data => setPro(data))
  
// },[filter])
// console.log(pro);
  const onSubmit = data =>{
  setShippingData(data)
  }

const handlePaymentSuccess = (paymentId) => {
  const savedCart = getDatabaseCart()
    const orderDetails = {
      ...loggedinUser,
      product:savedCart,
      shipement:shippingData,
      paymentId,
      orderTime: new Date()}

    fetch("https://rocky-castle-19322.herokuapp.com/addorder",{
      method:"POST",
      headers:{"Content-Type":'application/json'},
      body:JSON.stringify(orderDetails)
    })
    .then(res => res.json())
    .then(data=>{
      if(data) {
        alert("yourorder placed successfully")
        processOrder()
      }
    })
}
// const handlesearch =(event) => {
// setFilter(event.target.value)
// }

    return (
      
        <div className="">
          <div className="row">
            <div style={{display: shippingData ? "none": 'block'}} className="col-md-6">
             <form onSubmit={handleSubmit(onSubmit)}>
       {/* register your input into the hook by invoking the "register" function */}
          <input name="example" defaultValue="test" ref={register} />
          
         {/* include validation with required or other standard HTML validation rules */}
          <input name="name" defaultValue={loggedinUser} ref={register({ required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.name && <span>Name field is required</span>}
         
           <input type="submit" />

         </form>
            </div>
            <div style={{display: shippingData ? "block": 'none'}} className="col-md-6">
              <p>Pay me</p>
              <ProcessPayment handlePaymentSuccess={handlePaymentSuccess}/>
            </div>
          </div>
          {/* <input type="text" onBlur={handlesearch} className="form-control"/>
          {
            pro.map(data => (
            <p key={data._id}>{data.name}</p>
            ))
          } */}
        </div>
    )
}

export default Shipment



