import { Link } from "react-router-dom";
import './menu.components.css'; 

export function Menu() {
    return (
        <div className="menu">
            <label>
                <Link to="/" className="menu-item">home</Link> 
            </label>
            <label>
                <Link to="/Orders" className="menu-item">order</Link> 
            </label>
            <label >
                <Link to="/Create-order" className="menu-item">create order</Link> 
            </label>

               
            
        </div>
   
    )
   
}
