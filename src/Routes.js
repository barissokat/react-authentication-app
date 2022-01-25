import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PrivateRoute from './auth/PrivateRoute'
import UserInfoPage from './pages/UserInfoPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import PleaseVerifyEmailPage from './pages/PleaseVerifyEmailPage'
import EmailVerificationLandingPage from './pages/EmailVerificationLandingPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import PasswordResetLandingPage from './pages/PasswordResetLandingPage'

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<PrivateRoute />}>
          <Route path='/' exact element={<UserInfoPage />} />
        </Route>
        <Route path='/verify-email/:verificationString' exact element={<EmailVerificationLandingPage />} />
        <Route path='/forgot-password' exact element={<ForgotPasswordPage />} />
        <Route path='/login' exact element={<LoginPage />} />
        <Route path='/reset-password/:passwordResetCode' exact element={<PasswordResetLandingPage />} />
        <Route path='/please-verify' exact element={<PleaseVerifyEmailPage />} />
        <Route path='/signup' exact element={<SignupPage />} />
      </Routes>
    </Router>
  )
}
