import React from 'react'
import styles from './NewGoal.module.css'
import NewGoalForm from './NewGoalForm'
import Container from '../../UI/Container/Container'

const NewGoal = () => {
  return (
    <Container className={styles['new-goal']}>
      <h3>Set a new goal</h3>
      <NewGoalForm />
    </Container>
  )
}

export default NewGoal
