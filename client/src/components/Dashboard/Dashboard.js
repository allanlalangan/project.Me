import styles from './Dashboard.module.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Container from '../UI/Container/Container'

const Dashboard = () => {
  const redirect = useNavigate()
  const user = useSelector((state) => state.auth.user)
  useEffect(() => {
    if (!user) {
      redirect('/')
    }
  }, [redirect])
  return (
    <Container className={styles['dashboard-container']}>
      <h2 className={styles['dashboard-heading']}>Dashboard</h2>
    </Container>
  )
}

export default Dashboard
