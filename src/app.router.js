
import { Route, Routes } from "react-router-dom";
import { Orders } from "./components/order.component";
import { CreateOrder } from "./components/create-order.component";
export function AppRouter() {
    return (
        <Routes>
            <Route path="/Orders" element={<Orders></Orders>}></Route>
            <Route path="/create-order" element={<CreateOrder></CreateOrder>}></Route>
            <Route path="/edit-order/:id" element={<CreateOrder></CreateOrder>}></Route>
        </Routes>

    )

    
}