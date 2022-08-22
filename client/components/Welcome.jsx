import React from "react"
import { IfAuthenticated, IfNotAuthenticated } from "./Authenticated"
import { useAuth0 } from "@auth0/auth0-react"

const Welcome = () => {
  const { logout, loginWithRedirect } = useAuth0()

  const handleSignOut = (e) => {
    e.preventDefault()
    logout()
  }

  const handleRegister = (e) => {
    e.preventDefault()
    loginWithRedirect({
      redirectUri: `${window.location.origin}/register`
    })
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <>
      <h1>Welcome to Green Foot</h1>
      <IfAuthenticated>
        <a href="/" onClick={handleSignOut}>
          Sign out
        </a>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <a href="/" onClick={handleRegister}>
          Register
        </a>
        <a href="/" onClick={handleSignIn}>
          Sign in
        </a>
      </IfNotAuthenticated>
    </>
  )
}

export default Welcome