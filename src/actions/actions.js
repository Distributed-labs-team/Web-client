/*
 * action types
 */
export const TEST = "TEST";


/*
 * action creators
 */
export function test(test) {
    return {
        type: TEST,
        test
    }
}
