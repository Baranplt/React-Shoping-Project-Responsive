import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items: [], // Sepetteki ürünleri içeren dizi
};
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        increment: (state, action) => {
            const updatedProducts = state.map(product => {
                if (product.id === action.payload.id) {
                    return { ...product, amount: product.amount + 1 };
                }
                return product;
            });
            initialState = updatedProducts;
        }
        ,
        decrement: (state, action) => {
            const updatedProducts = state.map(product => {
                if (product.id === action.payload.id) {
                    return { ...product, amount: product.amount - 1 };
                }
                return product;
            });
            initialState = updatedProducts;

        },
        addBasket: (state, found) => {
            const addFind = state.cart.find(item => item.id === found.id);
            if (addFind) {
                addFind.amount += 1;
                state = [...state.filter(item => item.id !== found.id), {
                    id: found.id,
                    title: found.title,
                    price: found.price,
                    image: found.image,
                    amount: addFind.amount
                }]
            }
            else {
                state = [...state, {
                    id: found.id,
                    title: found.title,
                    price: found.price,
                    image: found.image,
                    amount: 1
                }]
            }
            console.log(state)

        }
    }
})
export const { increment, decrement, addBasket } = cartSlice.actions;
export default cartSlice.reducer;
