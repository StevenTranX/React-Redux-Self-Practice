import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  products: [
    {
      id: 1,
      name: 'VinSmart Live',
      display: 'AMOLED, 6.2, Full HD+',
      os: 'Android 9.0 (Pie)',
      cameraTruoc: '20 MP',
      backCamera: 'Chính 48 MP & Phụ 8 MP, 5 MP',
      ram: '4 GB',
      rom: '64 GB',
      price: 5700000,
      image: 'https://www.thegioididong.com/dtdd/vsmart-live',
    },
    {
      id: 2,
      name: 'Meizu 16Xs',
      display: 'AMOLED, FHD+ 2232 x 1080 pixels',
      os: 'Android 9.0 (Pie); Flyme',
      frontCamera: '20 MP',
      backCamera: 'Chính 48 MP & Phụ 8 MP, 5 MP',
      ram: '4 GB',
      rom: '64 GB',
      price: 7600000,
      image:
        'https://cellphones.com.vn/sforum/meizu-16xs-ra-mat-snapdragon-675-van-tay-trong-man-hinh-pin-4000-gia-tu-5-8-trieu',
    },
    {
      id: 3,
      name: 'Iphone XS Max',
      display: 'OLED, 6.5, 1242 x 2688 Pixels',
      os: 'iOS 12',
      backCamera: 'Chính 12 MP & Phụ 12 MP',
      frontCamera: '7 MP',
      ram: '4 GB',
      rom: '64 GB',
      price: 27000000,
      image: 'https://www.thegioididong.com/dtdd/iphone-xs-max',
    },
  ],
  selectedProduct: null,
  carts: [],
};
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    selectProduct: (state = initialState, action) => {
      return { ...state, selectedProduct: action.payload };
    },
    addToCart: (state, action) => {
      const index = state.carts.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (index === -1) {
        const newCarts = [...state.carts, { ...action.payload, quantity: 1 }];
        state.carts = newCarts;
      } else {
        const newCarts = [...state.carts];
        newCarts[index].quantity += 1;
        state.carts = newCarts;
      }
    },
    removeCartItem: (state, action) => {
      const newCarts = state.carts.filter((item) => item.id !== action.payload);
      state.carts = newCarts;
    },
  },
});

export const { selectProduct, addToCart, removeCartItem } =
  productSlice.actions;
// export actions
export default productSlice.reducer;
// export reducer to store
