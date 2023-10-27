import instance from "..";


export const Register = (payload) => {
  return instance.post('/auth/login', payload)
}

export const Login = (payload) => {
  return instance.post('/auth/login', payload)
}

export const Verify = token => {
  return instance.get('/auth/verify')
}
