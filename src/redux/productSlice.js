import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
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
        image: './img/sp_vivo850.png',
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
        image: './img/sp_note7.png',
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
        image: './img/sp_iphoneX.png',
      },
    ],
    selectedProduct: null,
  },

  reducers: {
    selectProduct: (state, action) => {
      return { ...state.payload.product, selectedProduct: action.product };
    },
  },
});

export const { selectProduct } = productSlice.actions;
// export actions
export default productSlice.reducer;
// export reducer to store
