import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useToken from '../hooks/useToken'
import { useQueryParams } from '../util/useQueryParams'

const LoginPage = () => {
  const navigate = useNavigate()

  const [token, setToken] = useToken()

  const [errorMessage, setErrorMessage] = useState('')

  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const [googleOauthUrl, setGoogleOauthUrl] = useState('')
  const { token: oauthToken } = useQueryParams()

  useEffect(() => {
    if (oauthToken) {
      setToken(oauthToken)
      navigate('/')
    }
  }, [oauthToken, setToken, navigate])

  useEffect(() => {
    const loadOauthUrl = async () => {
      try {
        const response = await axios.get('/auth/google/url')
        const { url } = response.data

        setGoogleOauthUrl(url)
      } catch (error) {
        console.log(error)
      }
    }

    loadOauthUrl()
  }, [])

  const onLoginClicked = async () => {
    const response = await axios.post('/api/login', {
      email: emailValue,
      password: passwordValue
    })
    const { token } = response.data

    setToken(token)
    navigate('/')
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
      >
        Log In
      </button>
      <button onClick={() => navigate('/forgot-password')}>Forgot your password?</button>
      <button onClick={() => navigate('/signup')}>Don't have an account? Sign Up</button>
      <button
        disabled={!googleOauthUrl}
        onClick={() => { window.location.href = googleOauthUrl }}
      >
        Log in with Google
      </button>
    </div>
  )
}

export default LoginPage
