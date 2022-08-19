import React, { useEffect } from "react"
import ChallengeCard from "./ChallengeCard"
import { useSelector, useDispatch } from "react-redux"
import { getAllChallenges } from "../actions/challenges"
import Rank from "./Rank"


function Home() {
  const challenges = useSelector((reduxState) => reduxState.challenges)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllChallenges())
  }, [])

  return (
    <div className="home-container">
      <div className="card-container">
        {challenges.map(challenge => <ChallengeCard key={challenge.id} data={challenge} />)}
      </div>
      <Rank />
    </div>
  )
}

export default Home