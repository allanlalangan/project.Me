// IMPORT

// styles and ui
import styles from './Button.module.scss';

///

const Button = (props) => {
  return (
    <button {...props} className={`${styles.button} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
