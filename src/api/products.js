import {addProduct, saveProducts} from "../actions/actions";
import {SERVER_URL} from "../actions/configs";

function headers() {
    console.log('request ' + localStorage.getItem("token"));
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.getItem("token") || null);
    return myHeaders;
}

export function getProducts() {
    fetch(SERVER_URL + "/product-service/products", {
        method: "GET",
        headers: headers(),
        credentials: 'same-origin'
    }).then((response) => {
        console.log(response);
        return response.json();
    }).then((json) => {
        console.log(json);
        saveProducts(json);
    }).catch(function (error) {
        console.log(error);
    });
}

export function createProduct(product) {
    fetch(SERVER_URL + "/product-service/products", {
        method: "POST",
        headers: headers(),
        credentials: 'same-origin',
        body: JSON.stringify(product),
    }).then((response) => {
        console.log(response);
        return response.json();
    }).then((json) => {
        addProduct(json);
    }).catch(function (error) {
        console.log(error);
    });
}