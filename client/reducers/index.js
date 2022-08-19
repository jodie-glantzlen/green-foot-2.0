import { combineReducers } from 'redux'

import challenges from './challenges'
import completedChallenges from './completedChallenges'

export default combineReducers({
  challenges,
  completedChallenges
})
