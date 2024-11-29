import { createSlice } from "@reduxjs/toolkit";


const bagSlice = createSlice({
    name: 'bag',
    initialState: [], // Ensure this is an array
    reducers: {
        addToBag: (state, action) => {
            state.push(action.payload); // Should be an array of items
        },
        removeFromBag: (state, action) => {
            return state.filter(itemId => itemId !== action.payload);
        }
    }
});

export const bagActions = bagSlice.actions;

export default bagSlice;