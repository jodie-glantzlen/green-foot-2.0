import { postChallenge } from "../apis/challenges"

// TYPE VARS
export const SEND_CHALLENGE = 'SEND_CHALLENGE'

// ACTION CREATORS
const sendChallenge = (challengeId) => {
  return {
    type: 'SEND_CHALLENGE',
    payload: challengeId
  }
}

// THUNKS
export const addChallenge = (challengeId) => {
  return (dispatch) => {
    postChallenge(challengeId)
    .then((body) => {
      dispatch(sendChallenge(body))
    })
    .catch(err => console.log(err.message))
  }
}