import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEM } from "../data/items";

const itemsSlice = createSlice({
    name: 'items',
    initialState: DEFAULT_ITEM, // Ensure this is an array
    reducers: {
        addInitialItems: (state, action) => {
            return action.payload; // Should be an array of items
        }
    }
});

export const itemsActions = itemsSlice.actions;

export default itemsSlice;