import React from 'react'
import styles from './Goals.module.css'

import NewGoal from './NewGoal/NewGoal'

const Goals = () => {
  return (
    <div className={styles['goals-container']}>
      <h1 className={styles['goals-heading']}>Goals</h1>
      <NewGoal />
    </div>
  )
}

export default Goals
