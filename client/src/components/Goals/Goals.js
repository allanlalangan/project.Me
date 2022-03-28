import React from 'react'
import Card from '../UI/Card'
import styles from './Goals.module.css'

import NewGoal from './NewGoal/NewGoal'

const Goals = () => {
  return (
    <Card className={styles['goals-container']}>
      <h1 className={styles['goals-heading']}>Goals</h1>
      <NewGoal />
    </Card>
  )
}

export default Goals
