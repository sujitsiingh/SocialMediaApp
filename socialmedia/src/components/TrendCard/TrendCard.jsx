import React from 'react'
import './TrendCard.css'

import { TrendData } from '../../Data/TrendData.js'
const TrendCard = () => {
  return (
    <div className="TrendCard">
      <h2>Trending</h2>
      <h3><u> For You</u></h3>
      {TrendData.map((trend) => {
        return (
          <div className="trend">
            <span>#{trend.name}</span>
            <span>{trend.posts} posts</span>
          </div>
        )
      })}

    </div>
  )
}

export default TrendCard