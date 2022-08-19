import React from "react"
import { useDispatch } from "react-redux"
import { addChallenge } from "../actions/completedChallenges"

const ChallengeCard = ({ data, totalPoints }) => {

  const dispatch = useDispatch()
  const isLocked = totalPoints < data.points_required

  const handleAdd = () => {
    console.log(`I clicked ${data.id}`)
    dispatch(addChallenge(data.id))
  }

  return (
      <div className={`card ${isLocked ? " locked" : ""}`}>
        <h3>{data.title}</h3>
        <img className="card-icon" src={data.icon} alt="" />
        <p>{data.description}</p>
        <div className="card-status">
          <img className="checkbox" src="./icons/unchecked.png" alt="" onClick={handleAdd}/>
          <p>Incomplete</p>
        </div>
      </div>
  )
}

export default ChallengeCard