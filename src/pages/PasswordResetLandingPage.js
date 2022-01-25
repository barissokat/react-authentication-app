import axios from 'axios'
import { useState } from 'react'
import PasswordResetFail from './PasswordResetFail'
import PasswordResetSuccess from './PasswordResetSuccess'
import { useQueryParams } from '../util/useQueryParams'

const PasswordResetLandingPage = () => {
  const [isFailure, setIsFailure] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [passwordValue, setPasswordValue] = useState('')
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('')
  const [passwordResetCode, setPasswordResetCode] = useState('')
  const { email } = useQueryParams()

  const onResetClicked = async () => {
    try {
      await axios.put(`/api/users/${passwordResetCode}/reset-password`, { email, newPassword: passwordValue })
      setIsSuccess(true)
    } catch (e) {
      setIsFailure(true)
    }
  }

  if (isFailure) return <PasswordResetFail />
  if (isSuccess) return <PasswordResetSuccess />

  return (
    <div className='content-container'>
      <h1>Reset Password</h1>
      <p>Please enter a new password</p>
      <input
        value={passwordResetCode}
        onChange={e => setPasswordResetCode(e.target.value)}
        placeholder='Password Reset Code'
      />
      <input
        type='password'
        value={passwordValue}
        onChange={e => setPasswordValue(e.target.value)}
        placeholder='Password'
      />
      <input
        type='password'
        value={confirmPasswordValue}
        onChange={e => setConfirmPasswordValue(e.target.value)}
        placeholder='Confirm Password'
      />
      <button
        disabled={!passwordValue || !confirmPasswordValue || passwordValue !== confirmPasswordValue}
        onClick={onResetClicked}
      >Reset Password
      </button>
    </div>
  )
}

export default PasswordResetLandingPage
