import React from 'react'
import styles from './NewGoalForm.module.css'
import Button from '../../../UI/Button'

const NewGoalForm = (props) => {
  const handleNewGoal = (e) => {
    e.preventDefault()
    console.log('add new goal')
  }

  return (
    <form onSubmit={handleNewGoal} className={styles['new-goal-form']}>
      <label htmlFor='name'></label>
      <input
        type='text'
        id='name'
        name='name'
        placeholder='I want to...'
        className={styles['new-goal-input']}
      />
      <Button type='submit'>Add Goal</Button>
    </form>
  )
}

export default NewGoalForm
