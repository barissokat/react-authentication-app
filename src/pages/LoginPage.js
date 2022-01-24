import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState('')

  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const onLoginClicked = async () => {
    alert('Log in not implemented yet')
  }

  return (
    <div className='content-container'>
      <h1>Log In</h1>
      {errorMessage && <div className='fail'>{errorMessage}</div>}
      <input
        value={emailValue}
        onChange={e => setEmailValue(e.target.value)}
        placeholder='someone@gmail.com'
      />
      <input
        type='password'
        value={passwordValue}
        onChange={e => setPasswordValue(e.target.value)}
        placeholder='password'
      />
      <button
        disabled={!emailValue || !passwordValue}
        onClick={onLoginClicked}
      >Log In
      </button>
      <button onClick={() => navigate('/forgot-password')}>Forgot your password?</button>
      <button onClick={() => navigate('/signup')}>Don't have an account? Sign Up</button>
    </div>
  )
}

export default LoginPage
