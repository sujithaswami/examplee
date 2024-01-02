import { getData, saveData, getDataById, updateData } from "./context.service";
const url ="  http://localhost:3000/Orders/";

export function getOrders() {
    return getData(url);

}

export function getOrdersById(id) {
    return getDataById(url, id);
}

export function saveOrder(data) {
    return saveData(url, data);
}
export function updateOrder(id, data) {
    return updateData(url, id, data);
}

                          


