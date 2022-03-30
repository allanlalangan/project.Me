// IMPORT

// hooks
import { useState } from 'react'
// redux
import { useDispatch } from 'react-redux'
import { addGoal } from '../../../features/goalsSlice'
// styles and ui
import styles from './NewGoalForm.module.css'
import Button from '../../UI/Button/Button'

///

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
      <Button className={`${styles['add-goal-btn']}`} type='submit'>
        Add Goal
      </Button>
    </form>
  )
}

export default NewGoalForm
