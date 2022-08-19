import { SEND_CHALLENGE } from "../actions/completedChallenges"

const reducer = (state = [], action) => {
  switch (action.type) {
    case SEND_CHALLENGE:
      return [...state, action.payload]
    default:
      return state
  }
}

export default reducer