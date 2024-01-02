import axios from "axios";
//crud operation
//create
export function saveData(url, data) {
    return axios.post(url, data);

}
//Read 
export function getData(url) {
    return axios(url);
}
//read get, data by using id
export function getDataById(url, id) {
    return axios.get(url+id);

}
 
    //update
export function updateData(url,id, data) {
        return axios.put(url+id, data);

    }

//Delete 
export function deleteData(url) {
    return axios.delete(url);

}