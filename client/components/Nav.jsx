import React from "react"
import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"

const Nav = () => {

  const { isAuthenticated } = useAuth0
  return (
    <>
      <Link to='/'>Welcome</Link>
      {isAuthenticated && <Link to='/home'>Home</Link>}
      {isAuthenticated && <Link to='/tips'>Tips & Tricks</Link>}
    </>
  )
}

export default Nav