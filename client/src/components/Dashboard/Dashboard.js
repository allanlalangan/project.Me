import styles from './Dashboard.module.css'
import Card from '../UI/Card'

const Dashboard = () => {
  return (
    <Card className={styles['dashboard-container']}>
      <h2 className={styles['dashboard-heading']}>Dashboard</h2>
    </Card>
  )
}

export default Dashboard
