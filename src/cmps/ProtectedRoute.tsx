import { ReactElement } from 'react'

type Props = {
  children: ReactElement<unknown, string | React.JSXElementConstructor<unknown>>
  path?: string
}

function ProtectedRoute({ children }: Props) {
  return children
}
export default ProtectedRoute
