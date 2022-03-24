import React from 'react'
import { FaStreetView } from 'react-icons/fa'
import { RiLeafLine } from 'react-icons/ri'
import styles from './Idle.module.css'

const Idle = () => {
  return (
    <section className={styles['idle-container']}>
      <RiLeafLine className={styles['idle-icon']} />
    </section>
  )
}

export default Idle
