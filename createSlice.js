createSlice() 

- handles state management, based on status like when fulfilled, pending by
state.tickets = action.payload (tickers response go here) 

- add initialState 

- declare methods under reducers 

- handle state management / changes under ExtraReducers 



const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })


// export methods 
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

// export the whole state and mthods  
export default cartSlice.reducer;
    
    
    
