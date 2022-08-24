import {
  SET_SIGNED_IN_USER,
  CLEAR_SIGNED_IN_USER,
} from '../actions/signedInUser'

const emptyUser = {
  auth0Id: '',
  email: '',
  token: '',
}

const user = (state = emptyUser, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_SIGNED_IN_USER:
      return payload

    case CLEAR_SIGNED_IN_USER:
      return emptyUser

    default:
      return state
  }
}

export default user