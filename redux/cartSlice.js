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
            console.log(newItem)
            const existingItem = state.products.find(item => item.id === newItem.id)

            if(existingItem) {
                console.log("Existss")
                // state.products.map(item =>
                //     item.id === existingItem.id ? {...item, quantity: quantity++} : item)
                existingItem.quantity++;
                state.total+=existingItem.price
            } else {
                state.products.push(newItem)
                state.total+=newItem.price*newItem.quantity
            }
            // state.products.push(action.payload)
            // state.total += action.payload.price*action.payload.amount
        },
        reset: (state) => {
            state = initialState;
        },
        removeItem: (state, action) => {
            console.log(action.payload)
            const removedItem = state.products.find(item => item.id === action.payload)
            state.products = state.products.filter(item => item.id !== action.payload)
            state.total = state.total - removeItem.price*removedItem.quantity
        },
        updateAmount: (state, action) => {
            console.log(action.payload)
            const updatedItem = action.payload;
            const existingItem = state.products.find(item => item.id === action.payload.id)
            state.total = state.total + Number(action.payload.price*(updatedItem.quantity-existingItem.quantity))
            existingItem.quantity = updatedItem.quantity;
        }
    },
});


export const { addProduct, reset, updateAmount, removeItem } = cartSlice.actions;
export default cartSlice.reducer;