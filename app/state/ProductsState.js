import { createSlice } from '@reduxjs/toolkit';

const saveProductsList = (state, action) => {
  state.products = action.payload;
};

// REDUCER
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    saveProducts: saveProductsList,
  },
});

// ACTIONS
const { saveProducts } = productsSlice.actions;

// SELECTOR
const selectProductsList = ({ products }) => products.products;

const productsSliceReducer = productsSlice.reducer;

export { productsSliceReducer, saveProducts, selectProductsList };
