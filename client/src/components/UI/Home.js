// IMPORT

// hooks
import { useEffect } from 'react'
// redux
import { useSelector } from 'react-redux'
// routing
import { useNavigate } from 'react-router-dom'
// styles and ui
import styles from './Home.module.css'
// icons
import { FaStreetView } from 'react-icons/fa'
import { RiLeafLine } from 'react-icons/ri'

///

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
