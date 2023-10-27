import { Navigate } from "react-router-dom"
import { useAuthContext } from "src/context/auth/AuthProvider"
import { LoadingView } from "src/sections/loading/loading-view"

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuthContext()
  console.log(loading, user)

  if (!user && loading) return <LoadingView />

  if (user) return <Navigate to='/' />

  return children

}

export default PublicRoute;
