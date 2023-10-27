import { Navigate } from "react-router-dom"
import { useAuthContext } from "src/context/auth/AuthProvider"
import { LoadingView } from "src/sections/loading/loading-view"

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthContext()

  if (!user && loading) return <LoadingView />

  if (!user) return <Navigate to='/login' />

  return children
}

export default PrivateRoute;
