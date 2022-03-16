import React from 'react'
import styles from './Card.module.css'

const Card = (props) => {
  return (
    <section className={`${styles['card-container']} ${props.className}`}>
      {props.children}
    </section>
  )
}

export default Card
