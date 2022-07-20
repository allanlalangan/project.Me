// IMPORT

// styles and ui
import styles from './NewGoal.module.scss';

// custom components
import useNewGoal from './useNewGoal';

///

const NewGoal = ({ gridItem }) => {
  const { handleAddGoal, handleAddGoalTextChange, addGoalText } = useNewGoal();
  return (
    <article className={`${gridItem} ${styles['container']}`}>
      <h3 className={styles.heading}>Set a new goal</h3>
      <form onSubmit={handleAddGoal} className={styles['new-goal__form']}>
        <fieldset className={styles['new-goal__fieldset']}>
          <label htmlFor='title'></label>
          <input
            value={addGoalText}
            onChange={handleAddGoalTextChange}
            type='text'
            id='title'
            name='title'
            placeholder='I want to...'
            className={`${styles['new-goal__input']}`}
          />
        </fieldset>
        <button className={`${styles['add-goal__btn']}`} type='submit'>
          Add Goal
        </button>
      </form>
    </article>
  );
};

export default NewGoal;
