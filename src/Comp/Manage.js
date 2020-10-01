import React from 'react'
import fakeData from '../fakeData'

function Manage() {


    const addproduct =() => {
        fetch("https://rocky-castle-19322.herokuapp.com/addproduct",{
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(fakeData)
        })
        .then(res => res.json())
        .then(d => console.log(d))
    }

    return (
        <div>
            <form action="">
                <input type="text" placeholder="name"/>
                <input type="file" placeholder="image"/>
                <input type="text" placeholder="agent name"/>
                <input type="text" placeholder="quantity"/>

            
            </form>
           <button onClick={addproduct}>Add product </button>
        </div>
    )
}

export default Manage
