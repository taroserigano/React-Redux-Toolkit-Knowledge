createSlice() 

- handles state management, based on status like when fulfilled, pending by
state.tickets = action.payload (tickers response go here) 

- add initialState 

- define methods under reducers 

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


