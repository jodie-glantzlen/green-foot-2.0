import React from "react"
import Auth from './Auth'
import Signup from "./Signup"
import { useAuth0 } from '@auth0/auth0-react'

const Welcome = () => {

  const handleClick = () => {
    window.location.href = '/home'
  }

  const { isAuthenticated } = useAuth0()

  const getButtons = () => {
    if (isAuthenticated) {
      return <button onClick={handleClick}>
        <Auth />
      </button>
    }
    return <div>
      <Signup />
      <Auth />
    </div>
  }

  return (
    <>
      <h1>Welcome to Green Foot</h1>
      {getButtons()}
    </>
  )
}

export default Welcome

