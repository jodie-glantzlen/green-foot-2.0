import { fetchAllChallenges } from "../apis/challenges"

// TYPE VARS
export const RECEIVE_CHALLENGES = 'RECEIVE_CHALLENGES'

// ACTION CREATORS

const receiveChallenges = (challengesArr) => {
  return {
    type: 'RECEIVE_CHALLENGES',
    payload: challengesArr
  }
}

// THUNKS

export const getAllChallenges = () => {
  return (dispatch) => {
    fetchAllChallenges()
    .then((challengesArr) => {
      dispatch(receiveChallenges(challengesArr))
    })
    .catch(err => console.log(err.message))
  }
}