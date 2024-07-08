import React from "react";
function UpdateDelivery(){
    return(

        
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form>
                    <h2>Update Delivery</h2>
                    <div className='mb-2'>
                        <label for="Id">Id:</label>
                        <input type="number" id="id" name="id" required />
                    </div>
                    <div className='mb-2'>
                        <label for="email">Order Id:</label>
                        <input type="number" id="oid" name="oid" required />
                    </div>
                    <div className='mb-2'>
                    <label for="date">Delivery Date:</label>
                    <input type="date" id="dd" name="date"/>
                    </div>
                    <div className='mb-2'>
                    <label for="addr">Delivery Address:</label>
                    <input type="text" id="addr" name="deliveryAddress" required  />
                    </div>

                    <div className='mb-2'>
                    <label for="fee">Delivery Fee:</label>
                    <input type="number" id="fee" name="deliveryFee" required   />
                    </div>
                    <button className='btn btn-success' type="submit">Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateDelivery; 