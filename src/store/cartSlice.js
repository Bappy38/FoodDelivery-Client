import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            
            const itemIdx = state.items.findIndex(item => item.id === action.payload.id);
            const item = state.items[itemIdx] ?? action.payload;

            if (itemIdx !== -1) {
                item.quantity++;
            }
            else {
                item.quantity = 1;
                state.items.push(item);
            }
        },
        removeItem: (state, action) => {
            
            const itemIdx = state.items.findIndex(item => item.id === action.payload.id);
            const item = state.items[itemIdx];

            if (item.quantity === 1) {
                state.items.splice(itemIdx, 1);
            }
            else {
                item.quantity--;
            }
        },
        clearCart: (state, action) => {
            state.items.length = 0;
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;