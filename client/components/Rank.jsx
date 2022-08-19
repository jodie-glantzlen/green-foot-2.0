import React from "react"

const Rank = ({ totalPoints }) => {
  return (
    <div className="rank-container">
      <div className="rank-content">
        <h3>Hi Michael</h3>
        <p>You earned {totalPoints} points</p>
        <p>You are a Bee Buddy</p>
      </div>
    </div>
  )
}

export default Rank