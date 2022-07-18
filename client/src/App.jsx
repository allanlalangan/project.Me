// ROUTING
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import DashboardPage from './pages/dashboard';
import GoalsPage from './pages/goals';

import Header from './components/Layout/Header/Header';

import styles from './App.module.scss';

const App = () => {
  return (
    <main className={styles['app-container']}>
      <Router>
        <Header />
        <section className={styles.page}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/goals' element={<GoalsPage />} />
          </Routes>
        </section>
      </Router>
    </main>
  );
};

export default App;
