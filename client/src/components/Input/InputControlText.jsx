// styles and ui
import styles from './InputControlText.module.scss';

const InputControlText = (props) => {
  return (
    <div className={styles.container}>
      <label
        htmlFor={props.for}
        className={`${styles.label} ${styles[`input-${props.type}-label`]}`}
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
  );
};

export default InputControlText;
