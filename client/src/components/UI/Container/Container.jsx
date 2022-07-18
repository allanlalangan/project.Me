// IMPORT

// styles and ui
import styles from './Container.module.scss';

///

const Container = (props) => {
  return (
    <div className={`${styles['card-container']} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Container;
