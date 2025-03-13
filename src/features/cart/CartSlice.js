import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cart: []

};

const cartSlice = createSlice({
  name: 'cart',
  initialState, 
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(items => items.pizzaId !== action.payload); },
    increaseQuantity(state, action) {
      const item = state.cart.find(items => items.pizzaId === action.payload); 
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find(items => items.pizzaId === action.payload); 
      if (item.quantity > 1) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    clearCart(state) {
      state.cart = [];
    }
  }
});

export const { addItem, deleteItem, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
export const getCart=state=>state.cart.cart;
export const getTotalQuantity=state=>state.cart.cart.reduce((sum,item)=>sum+item.quantity,0)
export const getTotalPrice=state=>state.cart.cart.reduce((sum,item)=>sum+item.totalPrice,0)
export const getCurrentQuantityById=id=>state=>state.cart.cart.find(item=>item.pizzaId===id)?.quantity??0;