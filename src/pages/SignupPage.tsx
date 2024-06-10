import { useState } from 'react'
import { Link } from 'react-router-dom'
import { authService } from '../services/authService'
import { User } from '../interfaces/User'

export const SignupPage = () => {
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSignUp = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }
    return await authService.signup({
      email,
      fullName,
      password,
    } as User)
  }

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>

      <form onSubmit={handleSignUp}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="email-input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="fullName">Full Name</label>
          <br />
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <br />
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button className="submit-btn" type="submit">
          Sign Up
        </button>
      </form>
      <p>
        already have an account? <Link to={'/login'}>Sign in now</Link>
      </p>
    </div>
  )
}
