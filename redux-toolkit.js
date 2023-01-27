STATE MANAGEMENT : 

1. add to createSlice 

const initialState = {
  loading: false,
  users: [],
  error: ''
}

const userSlice = createSlice({
  initialState,
})

2. add to store

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

HOW TO USE STATE:

const numOfIcecreams = useSelector(state => state.icecream.numOfIcecreams)
 const dispatch = useDispatch()

  return (
    <div>
      <h2>Number of ice creams - {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice cream</button>


BUILDER:

const userSlice = createSlice({
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false
      state.users = action.payload
      state.error = ''
    })
  }
})

