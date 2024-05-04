import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  sum: [],
  bookMarks: [],
  showAlert: false,
  showMassege: false,
  allTotal: null,
  taxPost: 45000,
};

const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let isInCart = state.products.some((el) => el.id === action.payload.id);
      const { id, operation } = action.payload;
      const productToUpdate = state.products.find((el) => el.id === id);
      if (isInCart) {
        productToUpdate.operation = operation;
        productToUpdate.quantity += Number(operation);
        productToUpdate.totalPirce =
          productToUpdate.price * productToUpdate.quantity;

        if (productToUpdate.quantity === 0) {
          productToUpdate.IsYetInCart = false;
          let index = state.products.findIndex((el) => el.id === id);
          state.products.splice(index, 1);
        }
      } else {
        state.products.push(action.payload);
      }
      let sum = state.products.reduce(
        (acc, items) => acc + items.totalPirce,
        0
      );
      state.sum = sum.toFixed(2);
      state.allTotal = Number(state.sum) + Number(state.taxPost);
    },
    removeToCart: (state, action) => {
      let isInCart = state.products.some((el) => el.id === action.payload.id);
      if (isInCart) {
        let index = state.products.findIndex(
          (el) => el.id === action.payload.id
        );
        state.products.splice(index, 1);
      }
      let sum = state.products.reduce(
        (acc, items) => acc + items.totalPirce,
        0
      );
      state.sum = sum.toFixed(2);
      state.allTotal = Number(state.sum) + Number(state.taxPost);
    },
    setBookMarks: (state, action) => {
      state.bookMarks.push(action.payload);
    },
    removeToBookMarks: (state, action) => {
      let index = state.bookMarks.findIndex(
        (el) => el._id === action.payload._id
      );
      state.bookMarks.splice(index, 1);
    },
  },
});
export const { addToCart, removeToCart, setBookMarks, removeToBookMarks } =
  productSlice.actions;
export default productSlice.reducer;
