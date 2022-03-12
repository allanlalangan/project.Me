import React from 'react'
import styles from './NewGoal.module.css'
import NewGoalForm from './NewGoalForm'

const NewGoal = () => {
  return (
    <div className={styles['new-goal']}>
      <h3>Set a new goal</h3>
      <NewGoalForm />
    </div>
  )
}

export default NewGoal
