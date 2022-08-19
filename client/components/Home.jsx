import React, { useEffect } from "react"
import ChallengeCard from "./ChallengeCard"
import { useSelector, useDispatch } from "react-redux"
import { getAllChallenges } from "../actions/challenges"
import Rank from "./Rank"


const Home = () => {
  const challenges = useSelector((reduxState) => reduxState.challenges)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllChallenges())
  }, [])

  let totalPoints = 0;

  return (
    <div className="home-container">
      <div className="card-container">
        {challenges.map(challenge => <ChallengeCard key={challenge.id} data={challenge} totalPoints={totalPoints} />)}
      </div>
      <Rank totalPoints={totalPoints} />
    </div>
  )
}

export default Home