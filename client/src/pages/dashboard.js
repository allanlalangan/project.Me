import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';

const Dashboard_page = () => {
  const redirect = useNavigate();
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    if (!user) {
      redirect('/login');
    }
  }, [user, redirect]);
  return (
    <>
      <Dashboard />
    </>
  );
};

export default Dashboard_page;
