import { combineReducers } from 'redux'

import challenges from './challenges'
import completedChallenges from './completedChallenges'
import signedInUser from './signedInUser'

export default combineReducers({
  challenges,
  completedChallenges,
  signedInUser
})
