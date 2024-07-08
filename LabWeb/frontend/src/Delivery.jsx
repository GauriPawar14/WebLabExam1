import React, { useState } from "react";
import { Link } from "react-router-dom";
function Delivery(){
    const [deliveries,setDelivery]=useState([{
 
        Id: 1, orderId:123,deliveryDate:6/12/2022,deliveryAddress:"Pune",deliveryFee:500,
        Id: 2, orderId:231,deliveryDate:14/11/2000,deliveryAddress:"Mumbai",deliveryFee:1000,
        Id: 3, orderId:321,deliveryDate:10/1/20223,deliveryAddress:"Hyderabad",deliveryFee:600,
        Id: 4, orderId:213,deliveryDate:27/2/2024,deliveryAddress:"Banglore",deliveryFee:800,
        Id: 5, orderId:312,deliveryDate:4/10/2023,deliveryAddress:"Delhi",deliveryFee:700,
    }])
    return(

        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rouded p-3">
         <Link to ="/create" className="btn btn-success">Add</Link>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>orderId</th>  
                <th>deliveryDate</th>
                <th>deliveryAddress </th>
                <th>deliveryFee</th>

              </tr>
            </thead>
            <tbody>
                {
                  deliveries.map((delivery)=> {

                       return <tr>
                        <td>{delivery.Id}</td>
                        <td>{delivery.orderId}</td>
                        <td>{delivery.deliveryDate}</td>
                        <td>{delivery.deliveryAddress}</td>
                        <td>{delivery.deliveryFee}</td>
                        <td>
                        <Link to="/update" className="btn btn-success">Update</Link>
                        <button>Delete</button>
                        </td>
                    </tr>

                    })
                }
           
            </tbody>
          </table>
        </div>
      </div>
    )
}
  
  
  export default Delivery;
  
