export default {
    setCartItemsToLocalStorage(context: any, payload: any) {
        const currentCartItems: string | null = localStorage.getItem('cartItems');
        let cart = currentCartItems ? JSON.parse(currentCartItems) : [];
        const isUserIdExists = cart.some((item: any) => item.userId === payload.userId);
        (!isUserIdExists) && cart.push(payload);
        localStorage.setItem('cartItems', JSON.stringify(cart));
        context.commit("setCart", cart);
        // console.log(cart);
    },
    getCartItemsFromLocalStorage(context: any, payload: object) {
        const cartItemsString = localStorage.getItem('cartItems');
        let cartItems: Array<object> | null = null;
        if (cartItemsString !== null && cartItemsString !== 'undefined') {
            cartItems = JSON.parse(cartItemsString);
            context.commit("setCart", cartItems);
        } else {
            context.commit("setCart", []);
        }
    },
    deleteCartItemFromLocalStorage(context: any, payload: object) {
        const currentCartItems: string | null = localStorage.getItem('cartItems');
        let cart = currentCartItems ? JSON.parse(currentCartItems) : [];
        const isUserIdExists = cart.some((item: any) => item.userId === payload);
        if (isUserIdExists) {
            cart = cart.filter((item: any) => item.userId !== payload);
        }
        localStorage.setItem('cartItems', JSON.stringify(cart));
        context.commit("setCart", cart);
    }
}