// styles and ui
import styles from './InputControlText.module.css'

const InputControlText = (props) => {
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
    </div>
  )
}

export default InputControlText
