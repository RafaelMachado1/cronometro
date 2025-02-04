import React from 'react'
import './LapList.css'

const LapList = ({laps}) => {
  return (
    <div className='timer-laps'>
        <h3 className='laps-title'>Voltas:</h3>
        <ul className='laps-list'>
          {laps.map((lap, index) => (
            <li key={index} className='lap-item'>
              Volta {index + 1}: <span className='lap-time'>{lap}</span>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default LapList