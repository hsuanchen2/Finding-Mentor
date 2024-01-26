export default {
    setCart(state: any, payload: Array<object> | Array<any>) {
        state.cart = payload;
    },
}