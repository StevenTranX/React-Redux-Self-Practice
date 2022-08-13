import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: [],
  },

  reducers: {
    cartReducer: (state, action) => {
      switch (action.type) {
        default:
          return state;
      }
    },
  },
});

export const { cartReducer } = productSlice.actions;
// export actions
export default productSlice.reducer;
// export reducer to store
