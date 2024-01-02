import { useEffect, useRef,useState } from 'react';
import { useParams } from 'react-router-dom';

import {saveOrder, getOrdersById , updateOrder} from '../services/orders.service';
export const CreateOrder = () => {
    const [btnText, setBtnText]= useState("");
    const ordernameRef = useRef();
    const orderpriceRef = useRef();
    const Params = useParams();
    useEffect(()=> {
        if(Params.id) {
            setBtnText("update");
            getData(Params.id);

        }
        else {
            setBtnText("create");
        }
       
    }, []);
    
    function getData(id) {
        getOrdersById(id).then((res)=> {

            ordernameRef.current.value = res.data.name;
            orderpriceRef.current.value = res.data.price;

        });
            


      
    }


   
    

    

    function saveData() {
        if(Params.id) {
            let obj = {
                "id" : Params.id,
                "name": ordernameRef.current.value,
                "price": orderpriceRef.current.value


        }
        updateOrder(Params.id,obj).then (()=> {

        
        alert("Data updated!...");
       });
       
        }
        else {
            let obj ={
                "name" : ordernameRef.current.value,
                "price" :orderpriceRef.current.value,
            }
        
         //alert(JSON.stringify(obj));
         saveOrder(obj).then(()=>{
            alert("data save");

            });
        }
        

    }
      


    return (
        <div >
            <form className="m-3">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" id="ordername" ref={ordernameRef}></input>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="number" className="form-control" id="orderprice" ref={orderpriceRef}></input>
                </div>
                <div className="mt-2">
                    <input type="button"  value={btnText} className="btn btn-primary" onClick={ ()=>{saveData()}}></input>
                    <input type="reset"  value="cancel" className="btn btn-secondary  ms-3"></input>
                </div>
            </form>
        </div>
    )
}