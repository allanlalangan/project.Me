// IMPORT
// useNewGoal hook
import useNewGoal from './useNewGoal';
// styles and ui
import styles from './NewGoalForm.module.scss';

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
      <button className={`${styles['add-goal-btn']}`} type='submit'>
        Add Goal
      </button>
    </form>
  );
};

export default NewGoalForm;
