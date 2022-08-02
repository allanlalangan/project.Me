// IMPORT
import { useDispatch } from 'react-redux';
import { deleteGoal } from '../../../features/goalsSlice';
// styles and ui
import styles from './GoalItem.module.scss';
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
      </div>
      <aside className={`${styles['goal-actions']}`}>
        <button
          onClick={() => console.log(props.id)}
          className={`${styles['goal-action-btn']}`}
        >
          <MdOutlineEditNote className={`${styles['goal-action-icon']}`} />
        </button>
        <button onClick={onDelete} className={`${styles['goal-action-btn']}`}>
          <MdDeleteForever className={`${styles['goal-action-icon']}`} />
        </button>
      </aside>
    </li>
  );
};

export default GoalItem;
