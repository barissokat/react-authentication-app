import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PrivateRoute from './auth/PrivateRoute'
import UserInfoPage from './pages/UserInfoPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<PrivateRoute />}>
          <Route path='/' exact element={<UserInfoPage />} />
        </Route>
        <Route path='/login' exact element={<LoginPage />} />
        <Route path='/signup' exact element={<SignupPage />} />
      </Routes>
    </Router>
  )
}
