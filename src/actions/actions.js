/*
 * action types
 */
export const TEST = "TEST";
export const SAVE_PRODUCTS = "SAVE_PRODUCTS";


/*
 * action creators
 */
export function test(test) {
    return {
        type: TEST,
        test
    }
}

export function saveProducts(products) {
    return {
        type: SAVE_PRODUCTS,
        test: products
    }
}
