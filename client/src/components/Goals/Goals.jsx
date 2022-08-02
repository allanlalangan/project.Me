// IMPORT
import { useNavigate } from 'react-router-dom';
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

const Goals = ({ gridItem }) => {
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { goals, isSuccess, isError, isLoading, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    !user && redirect('/login');
  }, []);

  useEffect(() => {
    dispatch(getGoals());

    //Cleanup function, will reset on Goals component unmount
    return () => {
      dispatch(reset());
    };
  }, [dispatch, user]);

  return (
    <ul className={`${gridItem} ${styles['goals-list']}`}>
      {(isLoading || isError) && <p>{message}</p>}
      {isSuccess && goals.length === 0 ? (
        <p>Hey, loser! You don't have any goals!</p>
      ) : (
        <>
          {goals.map((goal) => (
            <GoalItem id={goal._id} key={goal._id} title={goal.title} />
          ))}
        </>
      )}
    </ul>
  );
};

export default Goals;
