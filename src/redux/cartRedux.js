import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    deleteCart:(state,action) => {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      state.quantity -=1;
      state.total -= state.products[index].price * state.products[index].quantity;
      state.products.splice(index,1);
    },
    updateAmountProduct: (state,action) => {
      const id = action.payload.id;
      const type = action.payload.type;
      const index = state.products.findIndex(product => product._id === id);
      
        if(type){
          state.products[index].quantity += 1;
          state.total += state.products[index].price;
      }
      if(!type && state.products[index].quantity > 1){
        state.products[index].quantity -= 1;
        state.total -= state.products[index].price;
    }
      
  
    
    }
    

  },
});


export const { addProduct, deleteCart,updateAmountProduct } = cartSlice.actions;
export default cartSlice.reducer;
