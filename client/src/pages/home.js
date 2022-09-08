import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './home.module.scss';

const Home_page = () => {
  const { user } = useSelector((state) => state.auth);
  const redirect = useNavigate();
  useEffect(() => {
    user && redirect('/dashboard');
  }, []);

  return (
    <>
      <h1 className={styles.heading}>Welcome to project.Me</h1>
      <p className={styles.message}>
        A place to work on your most important project of all: yourself
      </p>
      <p className={styles['call-to-action']}>
        Create an account, or log in to start tracking your progress
      </p>
    </>
  );
};

export default Home_page;
