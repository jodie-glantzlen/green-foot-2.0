import { RECEIVE_CHALLENGES } from "../actions/challenges"

function reducer(state = [], action) {
  switch (action.type) {
    case RECEIVE_CHALLENGES:
      return action.payload
    default:
      return state
  }
}

export default reducer