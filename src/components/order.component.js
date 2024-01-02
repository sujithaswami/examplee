import { useEffect, useState } from 'react';
import {getOrders} from '../services/orders.service';
import { Link } from 'react-router-dom';
export const Orders = () => {
    const [data,  setData] = useState([]);
    useEffect(()=>{
        getData();

    },  []);
    function getData() {
        getOrders().then((res)=>{
            setData(res.data);

        });
    }
    
    return (
        <table className='table table-bordered table-striped'>
            <thead className='table-success'>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, index, arr) => {
                        return (
                            <tr>
                    
                               <td> {item.id} </td>
                               <td> {item.name} </td>
                               <td> {item.price} </td>
                               <td>
                                <Link to= {'/edit-order/'+item.id}>edit</Link>
                                </td>
                            </tr>
                            
                        )

                    })
                    
                }
                
            </tbody>
        </table>
    )
   

}
