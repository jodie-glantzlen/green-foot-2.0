import request from 'superagent'

export const fetchAllChallenges = () => {
  return request.get('/api/v1/challenges')
  .then(res => res.body)
}

export const postChallenge = (challengeId) => {
  const id = {
    challenge_id: challengeId
  }
  return request.post('/api/v1/challenges')
  .send(id)
  .then(res => res.body)
}