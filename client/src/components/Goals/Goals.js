// IMPORT

// hooks
import { useEffect } from 'react'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { getGoals, reset } from '../../features/goalsSlice'
// styles and ui
import styles from './Goals.module.css'
import Container from '../UI/Container/Container'
// custom components
import NewGoal from './NewGoal/NewGoal'
import GoalItem from './GoalItem/GoalItem'

///

const Goals = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const { goals, isError, isLoading, message } = useSelector(
    (state) => state.goals
  )

  useEffect(() => {
    dispatch(getGoals())

    //Cleanup function, will reset on Goals component unmount
    return () => {
      dispatch(reset())
    }
  }, [dispatch, user])

  return (
    <Container className={styles['goals-container']}>
      <h1 className={styles['goals-heading']}>Goals</h1>
      <ul className={`${styles['goals-list']}`}>
        {isLoading || isError ? (
          <p>{message}</p>
        ) : (
          <>
            {goals.map((goal) => (
              <GoalItem key={goal._id} title={goal.title} />
            ))}
          </>
        )}
      </ul>
      <NewGoal />
    </Container>
  )
}

export default Goals
