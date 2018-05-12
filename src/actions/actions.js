/*
 * action types
 */
import {store} from "../index";

export const SAVE_PRODUCTS = "SAVE_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";


/*
 * action creators
 */

export const saveProducts = (products) => (
    store.dispatch(
        {
            type: SAVE_PRODUCTS,
            products
        }
    )
);

export const addProduct = (product) => (
    store.dispatch(
        {
            type: ADD_PRODUCT,
            product
        }
    )
);

export const deleteProduct = (productId) => (
    store.dispatch(
        {
            type: DELETE_PRODUCT,
            productId
        }
    )
);
