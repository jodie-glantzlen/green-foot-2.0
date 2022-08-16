import React from "react"
import { Link } from "react-router-dom"

function Nav() {
  return (
    <>
      <Link to='/'>Welcome</Link>
      <Link to='/home'>Home</Link>
      <Link to='/tips'>Tips & Tricks</Link>
    </>
  )
}

export default Nav