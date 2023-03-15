import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
      products: [],
      quantity: 0,
      total: 0,
    },
    reducers: {
        addProd: (state, action) => {
          state.quantity += 1;
          state.products.push(action.payload);
          state.total += action.payload.price * action.payload.quantity;
        },

        updateProd: (state, action) => {
          state.products = state.products.map((product) =>
            product._id === action.payload.id &&
            product.size === action.payload.size &&
            product.color === action.payload.color
              ? { ...product, quantity: product.quantity + action.payload.quantity }
              : product
          )
          state.total += action.payload.quantity < 1 ? -action.payload.price : action.payload.price
        },

        deleteProd: (state, action) => {
          state.quantity -= 1
          state.products = state.products.filter(
            ({ _id: id, size, color }) =>
              id !== action.payload.id || size !== action.payload.size || color !== action.payload.color
          )
          state.total -= action.payload.totalPrice
      },
},
});

export const { addProd, updateProd, deleteProd } = cartSlice.actions;
export default cartSlice.reducer;