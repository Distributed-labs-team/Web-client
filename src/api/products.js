import {saveProducts} from "../actions/actions";
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
        saveProducts(json);
    }).catch(function (error) {
        console.log(error);
    });
}