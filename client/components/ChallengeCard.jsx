import React from "react"

function ChallengeCard({ data }) {
  return (
      <div className="card">
        <h3>{data.title}</h3>
        <img className="card-icon" src={data.icon} alt="" />
        <p>{data.description}</p>
        <p>{data.points_rewarded} points</p>
        <div className="card-status">
          <img className="checkbox" src="./icons/unchecked.png" alt="" />
          <p>Incomplete</p>
        </div>
      </div>
  )
}

export default ChallengeCard