import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.products.find(item => item.id === newItem.id)

            if(existingItem) {
                existingItem.quantity++;
                state.total+=existingItem.price
            } else {
                state.products.push(newItem)
                state.total+=newItem.price*newItem.quantity
            }
        },
        reset: (state) => {
            state = initialState;
        },
        removeItem: (state, action) => {
            const removedItem = state.products.find(item => item.id === action.payload)
            state.products = state.products.filter(item => item.id !== action.payload)
            state.total = state.total - removedItem.price*removedItem.quantity
        },
        updateAmount: (state, action) => {
            const updatedItem = action.payload;
            const existingItem = state.products.find(item => item.id === updatedItem.id)
            state.total = state.total + (updatedItem.price*updatedItem.quantity - existingItem.price*existingItem.quantity)
            existingItem.quantity = updatedItem.quantity;
        }
    },
});


export const { addProduct, reset, updateAmount, removeItem } = cartSlice.actions;
export default cartSlice.reducer;