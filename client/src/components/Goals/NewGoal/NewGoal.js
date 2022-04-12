// IMPORT

// styles and ui
import styles from './NewGoal.module.css';
import Container from '../../UI/Container/Container';
// custom components
import NewGoalForm from './NewGoalForm';

///

const NewGoal = () => {
  return (
    <Container className={styles['new-goal']}>
      <h3>Set a new goal</h3>
      <NewGoalForm />
    </Container>
  );
};

export default NewGoal;
