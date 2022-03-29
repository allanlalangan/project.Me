import React from 'react'
import styles from './NewGoal.module.css'
import NewGoalForm from './NewGoalForm'
import Card from '../../UI/Card'

const NewGoal = () => {
  return (
    <Card className={styles['new-goal']}>
      <h3>Set a new goal</h3>
      <NewGoalForm />
    </Card>
  )
}

export default NewGoal
