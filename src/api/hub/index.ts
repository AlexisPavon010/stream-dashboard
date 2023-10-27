import instance from "..";


export const Register = (payload) => {
  return instance.post('/auth/register', payload)
}

export const Login = (payload) => {
  return instance.post('/auth/login', payload)
}

export const Verify = () => {
  return instance.get('/auth/verify')
}
