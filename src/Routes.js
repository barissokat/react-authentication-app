import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { UserInfoPage } from './pages/UserInfoPage'

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<UserInfoPage />} />
      </Routes>
    </Router>
  )
}
