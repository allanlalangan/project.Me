import React from 'react'
import styles from './NewGoalForm.module.css'
import Button from '../../UI/Button'

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
        className={`${styles['new-goal-input']}`}
      />
      {/* <label htmlFor='duedate'>Due by:</label>
      <input
        className={`${styles['new-goal-input']}`}
        type='datetime-local'
        name='duedate'
        id='duedate'
      />
      <label htmlFor='notes'>Notes</label>
      <textarea
        className={`${styles['new-goal-input']}`}
        name='notes'
        id='notes'
        cols='30'
        rows='10'
      ></textarea> */}
      <Button type='submit'>Add Goal</Button>
    </form>
  )
}

export default NewGoalForm
