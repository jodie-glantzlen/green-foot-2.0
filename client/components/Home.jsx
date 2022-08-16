import React, { useEffect } from "react"
import ChallengeCard from "./ChallengeCard"
import { useSelector, useDispatch } from "react-redux"
import { getAllChallenges } from "../actions/challenges"


function Home() {
  const challenges = useSelector((reduxState) => reduxState.challenges)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllChallenges())
  }, [])

  return (
    <div>
      <h1>Hey! Welcome to this sick new version of Green Foot</h1>
      {challenges.map(challenge => <ChallengeCard key={challenge.id} data={challenge} />)}
    </div>
  )
}

export default Home