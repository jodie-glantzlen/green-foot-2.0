import request from 'superagent'

export const postUser = (user) => {
  const formattedUser = {
    auth0_id: user.auth0Id,
    email: user.email
  }
  return request.post('api/v1/users')
  .send(formattedUser)
  .catch(err => console.log(err.message))
}