import React from 'react'
import styles from './NewGoal.module.css'
import NewGoalForm from './NewGoalForm'

const NewGoal = () => {
  return (
    <section className={styles['new-goal']}>
      <h3>Set a new goal</h3>
      <NewGoalForm />
    </section>
  )
}

export default NewGoal
