import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        fav: []
    },
    reducers: {
        addProducts: (state, action) => {
            state.products = action.payload;
        },
        addToFav: (state, action) => {
            state.fav.push(action.payload);
        }
    }
})

export const {addProducts} = productSlice.actions;
export default productSlice.reducer;