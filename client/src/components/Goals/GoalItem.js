import React from 'react'
import styles from './GoalItem.module.css'
import { MdOutlineEditNote, MdDeleteForever } from 'react-icons/md'
import Button from '../UI/Button'

const GoalItem = (props) => {
  return (
    <li className={styles['goal-item']}>
      <div className={`${styles['goal-heading']}`}>
        <p className={`${styles['goal-title']}`}>{props.title}</p>
        <aside className={`${styles['goal-actions']}`}>
          <Button className={`${styles['goal-action-btn']}`}>
            <MdOutlineEditNote className={`${styles['goal-action-icon']}`} />
          </Button>
          <Button className={`${styles['goal-action-btn']}`}>
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
  )
}

export default GoalItem
