import React, { useState } from 'react'
import axios from 'axios'
function CreateDelivery() {

    const [Id,setId]=useState()
    const [orderId, setorderId]=useState()
    const [deliveryDate, setdeliveryDate]=useState()
    const [deliveryAddress, setdeliveryAddress]=useState()
    const [deliveryFee, setdeliveryFee]=useState()




    const Submit=(e) =>{
        e.preventDefault();
        axios.post('http://localhost:3001/CreateDelivery', {Id, orderId, deliveryDate,deliveryAddress,deliveryFee})
        .then(res => {
            console.log(res)
         
        })
        .catch(err => console.log(err));
    }

    return (



        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={Submit}>
                    <h2>ADD Delivery</h2>
                    <div className='mb-2'>
                        <label for="Id">Id:</label>
                        <input type="text" id="name" name="TypeId " required 
                        onChange={(e)=> setName(e.target.value)}/>

                    </div>

                    <div className='mb-2'>
                        <label for="orderid">Order Id:</label>
                        <input type="text" id="oid" name="OrderId" required 
                            onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label for="date">Delivery Date:</label>
                        <input type="date" id="dd" name="date" required 
                            onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label for="addr">Delivery Address:</label>
                        <input type="text" id="addr" name="deliveryAddress" required 
                            onChange={(e)=> setAge(e.target.value)}/>
                    </div>

                    <div className='mb-2'>
                        <label for="fee">Delivery Fee:</label>
                        <input type="number" id="fee" name="deliveryFee" required 
                            onChange={(e)=> setAge(e.target.value)}/>
                    </div>
                    <button className='btn btn-success' type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateDelivery; 