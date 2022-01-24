import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '../hooks/useUser'

const PrivateRoute = props => {
  const user = useUser()

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return user ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute
