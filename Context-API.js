CONTEXT API 

1. CONTEXT 

// create context 
const GithubContext = createContext()

// pass it to children 
export const GithubProvider = ({ children }) => {

// set up state 
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  }

// make state and dispatch (for actions) available 
  const [state, dispatch] = useReducer(githubReducer, initialState)

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext


2. REDUCERS 

// provides state

const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      }
}



3. COMPONENTS 

function UserSearch() {
  const [text, setText] = useState('')
  
// access users
  const { users, dispatch } = useContext(GithubContext)
  const { setAlert } = useContext(AlertContext)

  const handleChange = (e) => setText(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (text === '') {
      setAlert('Please enter something', 'error')
    } else {
      dispatch({ type: 'SET_LOADING' })
      const searchedUsers = await searchUsers(text)

// provide searched users 
      dispatch({ type: 'GET_USERS', payload: searchedUsers })

      setText('')
    }
  }



function UserResults() {
// extracted users 
  const { users, loading } = useContext(GithubContext)

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  } else {
    return <Spinner />
  }
}
