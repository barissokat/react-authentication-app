import { useNavigate } from 'react-router-dom'

const PasswordResetFail = () => {
  const navigate = useNavigate()

  return (
    <div className='content-container'>
      <h1>Uh oh...</h1>
      <p>
        Something went wrong while trying to reset your password.
      </p>
      <button onClick={() => navigate('/login')}>Back to Log in</button>
    </div>
  )
}

export default PasswordResetFail
