import React from 'react'
import { FaStreetView } from 'react-icons/fa'
import styles from './Idle.module.css'

const Idle = () => {
  return (
    <section className={styles['idle-container']}>
      <FaStreetView className={styles['idle-icon']} />
    </section>
  )
}

export default Idle
