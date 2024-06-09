import { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'
import { authService } from '../services/authService'

type Props = {
  children: ReactElement<unknown, string | React.JSXElementConstructor<unknown>>
  path?: string
}

function ProtectedRoute({ children }: Props) {
  const user = authService.getLoggedUser()
  if (!user) {
    return <Navigate to="/login" replace />
  }
  return children
}
export default ProtectedRoute
