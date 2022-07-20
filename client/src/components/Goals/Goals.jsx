// IMPORT

// hooks
import { useEffect } from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { getGoals, reset } from '../../features/goalsSlice';
// styles and ui
import styles from './Goals.module.scss';

// custom components

import GoalItem from './GoalItem/GoalItem';

///

const Goals = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { goals, isError, isLoading, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    dispatch(getGoals());

    //Cleanup function, will reset on Goals component unmount
    return () => {
      dispatch(reset());
    };
  }, [dispatch, user]);

  return (
    <section className={styles['goals-container']}>
      <ul className={`${styles['goals-list']}`}>
        {(isLoading || isError) && <p>{message}</p>}
        {goals?.length === 0 ? (
          <p>No Goals</p>
        ) : (
          <>
            {goals.map((goal) => (
              <GoalItem id={goal._id} key={goal._id} title={goal.title} />
            ))}
          </>
        )}
      </ul>
    </section>
  );
};

export default Goals;
