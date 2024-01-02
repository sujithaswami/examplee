import React from "react";
import './components/menu.components.css';
import { Link } from "react-router-dom";
export class className extends React.Component{
    constructor() {
        super();
    }
    render() {
        return(
            <div className="menu">
            <label>
                <Link to="/" className="menu-item">home</Link> 
            </label>
            <label>
                <Link to="/Orders" className="menu-item">order</Link> 
            </label>
            <label>
                <Link to="/Create-order" className="menu-item">create order</Link> 
            </label>

               
            
        </div>


        )
        
    }
}
