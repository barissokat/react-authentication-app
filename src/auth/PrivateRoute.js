import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = props => {
  const user = null

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return user ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute
