import { Link } from 'react-router-dom'
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['section-inner']}>
        <Link to='/' className={styles.logo}>
          Home
        </Link>
        <nav className={styles.nav}>
          <h1>Online Store</h1>
        </nav>
      </div>
    </header>
  )
}

export default Header
