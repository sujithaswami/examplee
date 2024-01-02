import { useEffect, useState }  from "react";
import { getproducts } from "../services/product.service";

export function Products() {
    let headers = ["Id", "Name", "Price", "quantity", "gst", "total"];


    //let data= [];
    const [ data, setData]=useState([]);

    useEffect(()=> {
        getData();

    })
    function getData() {
        getproducts().then((res)=> {
            setData(res.data);
          
        });

    }
    
   
    return (


        <div>
            <h2>Products</h2>
            <table className = "table table-primary table-striped table-hover">
                <thead>
                    
                    <tr>
                        {
                            headers.map((item, index, arr) => {
                                return (
                                    <th>{item}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index, arr) => {
                            item.total =((item.Price * (item.gst /100)) + item.price) * item .quantity;
                            return (
                                <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantitu}</td>
                                <td>{item.gst}</td>
                                <td>{item.total}</td>

                                </tr>
                                
                            )

                        })
                    }
                </tbody>
               
            </table>
        </div>
    )
}
 


