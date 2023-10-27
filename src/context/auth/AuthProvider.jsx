import React, { createContext, useContext, useEffect, useState } from 'react'
import { Login, Register, Verify } from 'src/api/auth'

const Context = createContext()
const token = localStorage.getItem('token')

export const useAuthContext = () => {
  return useContext(Context)
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined)
  const [loading, setLoading] = useState(true)
  const [loginErrors, setLoginErrors] = useState([])
  const [registerErrors, setRegisterErrors] = useState([])


  const handleLogin = (user) => {
    Login(user)
      .then(({ data }) => {
        setUser(data)
        setLoading(false)
        localStorage.setItem('token', data.token)
      })
      .catch(({ response }) => {
        const message = response.data.message;
        const errorsArray = Array.isArray(message) ? message : [message];
        setLoginErrors(errorsArray);
        setUser(null)
      })
  }

  const handleRegister = (user) => {
    setLoading(true)
    Register(user)
      .then(({ data }) => {
        setUser(data)
        localStorage.setItem('token', data.token)
      })
      .catch(({ response }) => console.log(response.data))
      .finally(() => setLoading(false))
  }


  const handleLogout = () => {
    setUser(null)
    localStorage.clear('token')
  }

  const handleGetUserToken = () => {
    setLoading(false)
    if (!token) return
    setLoading(true)
    setTimeout(() => {
      Verify(token)
        .then(({ data }) => {
          setLoading(false)
          setUser(data)
        })
        .catch((err) => {
          console.log(err)
          setUser(null)
          setLoading(false)
        })
        .finally(() => setLoading(false))
    }, 3000);
  }


  useEffect(() => {
    handleGetUserToken(token)
  }, [])



  return (
    <Context.Provider
      value={{
        user,
        loading,
        loginErrors,
        handleLogin,
        handleLogout,
        handleRegister
      }}>
      {children}
    </Context.Provider>
  )
}

export default AuthProvider;
