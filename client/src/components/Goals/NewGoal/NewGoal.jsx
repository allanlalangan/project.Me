// IMPORT

// styles and ui
import styles from './NewGoal.module.scss';

// custom components
import useNewGoal from './useNewGoal';

///

const NewGoal = () => {
  const { handleAddGoal, handleAddGoalTextChange, addGoalText } = useNewGoal();
  return (
    <section className={styles['new-goal']}>
      <h3>Set a new goal</h3>
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
    </section>
  );
};

export default NewGoal;
