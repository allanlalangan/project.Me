// ROUTING
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import DashboardPage from './pages/dashboard'

import Header from './components/Layout/Header'
// import Login from './components/Login/Login'
// import Goals from './components/Goals/Goals'
// import Register from './components/Register/Register'

import styles from './App.module.css'

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
          </Routes>
        </section>
      </Router>
    </main>
  )
}

export default App
