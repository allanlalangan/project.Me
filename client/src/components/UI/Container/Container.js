// IMPORT

// styles and ui
import styles from './Container.module.css'

///

const Container = (props) => {
  return (
    <div className={`${styles['card-container']} ${props.className}`}>
      {props.children}
    </div>
  )
}

export default Container
