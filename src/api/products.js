import {addProduct, deleteProduct, saveProducts} from "../actions/actions";
import {SERVER_URL} from "../actions/configs";
import {headers} from "./configs";

let PRODUCTS_URL = SERVER_URL + "/product-service/products";

export function getProducts() {
    fetch(PRODUCTS_URL, {
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

export function getUserProducts(email) {
    fetch(PRODUCTS_URL + "/user/" + email, {
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
    fetch(PRODUCTS_URL, {
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

export function removeProduct(productId) {
    fetch(PRODUCTS_URL + "/" + productId, {
        method: "DELETE",
        headers: headers(),
        credentials: 'same-origin'
    }).then((response) => {
        console.log(response);
        if (response.status === 200) {
            deleteProduct(productId);
        }
    }).catch(function (error) {
        console.log(error);
    });
}