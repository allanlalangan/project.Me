// styles and ui
import styles from './Input.module.css'

const Input = (props) => {
  return (
    <div>
      <label
        htmlFor={props.for}
        className={styles[`input-${props.type}-label`]}
      >
        {props.label}
      </label>
      <input
        className={`${styles['form-control']} ${props.className}`}
        type={props.type}
        id={props.for}
        name={props.for}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
      {/* <label
        htmlFor={props.for}
        className={styles[`input-${props.type}-label`]}
      >
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.for}
        id={props.for}
        className={`${styles.input} ${props.className}`}
      /> */}
    </div>
  )
}

export default Input
