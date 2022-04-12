// IMPORT
// useNewGoal hook
import useNewGoal from './useNewGoal';
// styles and ui
import styles from './NewGoalForm.module.css';
import Button from '../../UI/Button/Button';

///

const NewGoalForm = (props) => {
  const { handleAddGoal, handleAddGoalTextChange, addGoalText } = useNewGoal();

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
  );
};

export default NewGoalForm;
