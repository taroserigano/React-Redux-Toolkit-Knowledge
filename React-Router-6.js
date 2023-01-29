    <BrowserRouter>
      <Routes>
         // <Route> wraps around to include the child <Route> components like below 
         // the <SharedLayout> includes Navbar that will take you to different paths 
        <Route path='/' element={<SharedLayout />}>
          // index means the same path as "/" 
          <Route index element={<Home />} />
            // from "/", added paths will create another branch like "/about" 
          <Route path='about' element={<About />} />
          
           // here, this can 
          <Route path='products' element={<SharedProductLayout />}> // this only renders child components through <Outlet>
            <Route index element={<Products />} />
            <Route path=':productId' element={<SingleProduct />} />
              
              // here, the :productId can be navigated by in Product.js:
              <Link to={`/products/${product.id}`}>more info</Link>

              
              
          </Route>
          
          // if you log in, <Login> will navigate you to "/dashboard" 
          // inside there, the <ProtectedRoute> checks if (user?), 
          // if yes,     return <Navigate to='/' />;
          <Route path='login' element={<Login setUser={setUser}></Login>} />
          
          // this URL will be hidden and only accessible from <Login> component that willl directs 
          <Route path='dashboard'
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>




NAVBAR:

<NavLink> can navigate you to different paths 

const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Home
      </NavLink>
      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        About
      </NavLink>
      <NavLink
        to='/products'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Products
      </NavLink>
      <NavLink
        to='/login'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Login
      </NavLink>
    </nav>
  );
};


LOGIN:

  const handleSubmit = async (e) => {
    setUser({ name: name, email: email });
    navigate('/dashboard');
  };


PROTECTED ROUTE:

const ProtectedRoute = ({ children, user }) => {
  if (!user) {
    return <Navigate to='/' />;
  }
  return children;
};
export default ProtectedRoute;












