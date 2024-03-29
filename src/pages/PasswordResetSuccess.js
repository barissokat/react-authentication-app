import { useNavigate } from 'react-router-dom'

const PasswordResetSuccess = () => {
  const navigate = useNavigate()

  return (
    <div className='content-container'>
      <h1>Success!</h1>
      <p>
        Your password has been reset, now please login with your new password.
      </p>
      <button onClick={() => navigate('/login')}>Log in</button>
    </div>
  )
}

export default PasswordResetSuccess
