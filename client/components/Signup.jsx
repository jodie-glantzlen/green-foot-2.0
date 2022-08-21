
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Signup = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <button onClick={() => loginWithRedirect({ action: 'signup' })}>Sign Up</button>
  )
}

export default Signup