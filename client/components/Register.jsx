import React, { useEffect , useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { postUser } from "../apis/users"

const Register = () => {
  const signedInUser = useSelector((state) => state.signedInUser)
  const navigate = useNavigate()
  const [form, setForm] = useState({
    auth0Id: '',
    email: '',
  })

  useEffect(() => {
    setForm({
      auth0Id: signedInUser?.auth0Id,
      email: signedInUser?.email,
    })
  }, signedInUser)

  async function handleClick() {
    await postUser(form)
    navigate('/home')
  }
  
  return (
    <>
      <h1>Hi, welcome to Green Foot!</h1>
      <form action="">
        <label htmlFor="auth0Id">
          Auth0 ID:
          <input
            type="text"
            id="auth0Id"
            name="auth0Id"
            disabled={true}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input 
          type="text"
          id="email"
          name="email"
          disabled={true} />
        </label>
        <button type="sumbit" onClick={handleClick}>
          Register
        </button>
      </form>
    </>
  )
}

export default Register