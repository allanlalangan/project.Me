import { useEffect } from 'react'
import { FaStreetView } from 'react-icons/fa'
import { RiLeafLine } from 'react-icons/ri'
import styles from './Home.module.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const redirect = useNavigate()
  const user = useSelector((state) => state.auth.user)

  useEffect(() => {
    if (user) {
      redirect('/dashboard')
    }
  }, [user])

  return (
    <section className={styles['home-container']}>
      <RiLeafLine className={styles['idle-icon']} />
    </section>
  )
}

export default Home
