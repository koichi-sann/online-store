import styles from './footer.module.css'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['section-inner']}>
        <div>
          <a href='https://rs.school/' target='_blank' className={styles.link}>
            RS School
          </a>
        </div>
        <div>
          <a
            href='https://rollingscopes.com/'
            target='_blank'
            className={styles['link-second']}
          >
            Rolling Scopes School, 2022
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
