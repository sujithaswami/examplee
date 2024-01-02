
import { getData, saveData, updatedata } from "./context.service";

const url = "http://localhost:3000/products";

 export function getproducts() {
    return getData(url);
}

