import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addGoal } from '../../../features/goalsSlice'
import styles from './NewGoalForm.module.css'
import Button from '../../UI/Button'

const NewGoalForm = (props) => {
  const dispatch = useDispatch()
  const [addGoalText, setAddGoalText] = useState('')

  const handleAddGoalTextChange = (e) => {
    setAddGoalText(e.target.value)
  }

  const handleAddGoal = (e) => {
    e.preventDefault()
    const formData = { title: addGoalText }
    dispatch(addGoal(formData))
    setAddGoalText('')
  }

  return (
    <form onSubmit={handleAddGoal} className={styles['new-goal-form']}>
      <label htmlFor='title'></label>
      <input
        value={addGoalText}
        onChange={handleAddGoalTextChange}
        type='text'
        id='title'
        name='title'
        placeholder='I want to...'
        className={`${styles['new-goal-input']}`}
      />
      {/* <label for='category'>Category</label>
      <select name='category' id='category'>
        <option value='' disabled selected hidden>
          Select a category
        </option>
        <option value='work'>Work</option>
        <option value='home'>Home</option>
        <option value='code'>Code</option>
        <option value='self'>Self</option>
      </select> */}
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
      <Button className={`${styles['add-goal-btn']}`} type='submit'>
        Add Goal
      </Button>
    </form>
  )
}

export default NewGoalForm
