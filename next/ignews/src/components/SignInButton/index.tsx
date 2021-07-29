import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'


import styles from './styles.module.scss'

//#04d361

export function SignInButton() {
  const isUserLoggedIn = true;


  return isUserLoggedIn ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#04d361" />
      Estevão Vasques

      <FiX color="#737380" className={styles.closedIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#eba417" />
      Sing in with GitHub
    </button>
  )
}