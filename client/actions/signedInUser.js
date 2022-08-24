// TYPE VARS

export const SET_SIGNED_IN_USER = 'SET_LOGGED_IN_USER'
export const CLEAR_SIGNED_IN_USER = 'CLEAR_LOGGED_IN_USER'

// ACTION CREATOR

export const setSignedInUser = (userToSave) => {
  return {
    type: SET_SIGNED_IN_USER,
    payload: userToSave,
  }
}

export const clearSignedInUser = () => {
  return {
    type: CLEAR_SIGNED_IN_USER,
  }
}