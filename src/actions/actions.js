/*
 * action types
 */
import {store} from "../index";

export const SAVE_PRODUCTS = "SAVE_PRODUCTS";


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
