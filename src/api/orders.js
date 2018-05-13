import {addOrder, saveOrders} from "../actions/actions";
import {SERVER_URL} from "../actions/configs";
import {headers} from "./configs";

export function getUserOrders(userEmail) {
    fetch(SERVER_URL + "/product-service/order/user/" + userEmail, {
        method: "GET",
        headers: headers(),
        credentials: 'same-origin'
    }).then((response) => {
        console.log(response);
        return response.json();
    }).then((json) => {
        console.log(json);
        saveOrders(json);
    }).catch(function (error) {
        console.log(error);
    });
}

export function createOrder(product) {
    fetch(SERVER_URL + "/product-service/order", {
        method: "POST",
        headers: headers(),
        credentials: 'same-origin',
        body: JSON.stringify(product),
    }).then((response) => {
        console.log(response);
        return response.json();
    }).then((json) => {
        addOrder(json);
    }).catch(function (error) {
        console.log(error);
    });
}