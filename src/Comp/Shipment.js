import React from 'react'
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { UserContext } from '../App';
import { getDatabaseCart, processOrder } from '../utilities/databaseManager';

function Shipment() {
    const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data =>{
    const savedCart = getDatabaseCart()
    const orderDetails = {...loggedinUser,product:savedCart,shipement:data,orderTime: new Date()}

    fetch("http://localhost:5000/addorder",{
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
const [loggedinUser,setLoggedinUser]  =  useContext(UserContext)
  console.log(watch("example"));
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
          <input name="example" defaultValue="test" ref={register} />
          
          {/* include validation with required or other standard HTML validation rules */}
          <input name="name" defaultValue={loggedinUser} ref={register({ required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.name && <span>Name field is required</span>}
         
          <input type="submit" />

        </form>
    )
}

export default Shipment
