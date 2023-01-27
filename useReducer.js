
export const AlertProvider = ({ children }) => {
  const initialState = null
  
  // add initial state and reducer in useReducer 
  const [state, dispatch] = useReducer(alertReducer, initialState)

  // with this, 
  // you an use dispatch to invoke method anywhere
  // and you can access state with useSelector everywhere 
  
  
 // ACTION
  const setAlert = (msg, type) => {
    dispatch({
      type: 'SET_ALERT',
      payload: { msg, type },
    })

    setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 3000)
  }


// REDUCER
  const alertReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ALERT':
      return action.payload
    case 'REMOVE_ALERT':
      return null
    default:
      return state
  }
}










