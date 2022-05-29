// IMPORT
import { useDispatch } from 'react-redux';
import { deleteGoal } from '../../../features/goalsSlice';
// styles and ui
import styles from './GoalItem.module.css';
import Button from '../../UI/Button/Button';
// icons
import { MdOutlineEditNote, MdDeleteForever } from 'react-icons/md';

///

const GoalItem = (props) => {
  const dispatch = useDispatch();
  const onDelete = (e) => {
    dispatch(deleteGoal(props.id));
  };
  return (
    <li className={styles['goal-item']}>
      <div className={`${styles['goal-heading']}`}>
        <p className={`${styles['goal-title']}`}>{props.title}</p>
        <aside className={`${styles['goal-actions']}`}>
          <Button
            onClick={() => console.log(props.id)}
            className={`${styles['goal-action-btn']}`}
          >
            <MdOutlineEditNote className={`${styles['goal-action-icon']}`} />
          </Button>
          <Button onClick={onDelete} className={`${styles['goal-action-btn']}`}>
            <MdDeleteForever className={`${styles['goal-action-icon']}`} />
          </Button>
        </aside>
      </div>
      {/* <div className={`${styles['goal-details']}`}>
        <p className={`${styles['goal-detail']}`}>Start Date:</p>
        <p className={`${styles['goal-detail']}`}>Category:</p>
        <p className={`${styles['goal-detail']}`}>Complete:</p>
      </div> */}
    </li>
  );
};

export default GoalItem;
