/*
 * action types
 */
import {store} from "../index";

export const SAVE_PRODUCTS = "SAVE_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const SAVE_ORDERS = "SAVE_ORDERS";
export const ADD_ORDER = "ADD_ORDER";


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

export const saveOrders = (orders) => (
    store.dispatch(
        {
            type: SAVE_ORDERS,
            orders
        }
    )
);

export const addOrder = (order) => (
    store.dispatch(
        {
            type: ADD_ORDER,
            order
        }
    )
);
