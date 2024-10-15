import bellIcon from "./../../img/icons/icons8-lembrete-de-compromissos-60.png"
import styles from "./DashboardHeader.module.css"
import { Link } from "react-router-dom"

export const DashboardHeader = ({ userData, setOpenMenu, openMenu }) => {

  return (
    <header className={styles.dashboardHeader}>
      {openMenu == true && (
        <div className={styles.hamburguerMenu}>
          <div className={styles.hamburguerHeader}>
            <h1>Luminy</h1>
            <i className='bx bx-x' onClick={() => setOpenMenu(false)}></i>
          </div>
          <Link to={'/'}>
            <p>Home</p>
          </Link>
          <footer>
            © 2024 Fernando Kohn
          </footer>
        </div>
      )}
      <div className={styles.hamburguer}>
        <i className='bx bx-menu' onClick={() => setOpenMenu(true)}></i>
      </div>
      <h1 className={styles.headerH1}>Dashboard</h1>
      <div className={styles.userInfoHeader}>
        <div className={styles.bellIcon}>
          <img src={bellIcon} alt="Bell Icon" />
          <div className={styles.dot}></div>
        </div>
        <div className={styles.userPicture}>
          <p>{userData.user}</p>
          {userData.gender ? (
            <img className={styles.profilePic} src={`https://avatar.iran.liara.run/public/${userData.gender}`} alt="Profile Picture" />
          ) : (
            <img className={styles.profilePic} src="https://avatar.iran.liara.run/public" alt="Profile Picture" />
          )}
        </div>
      </div>
    </header>
  )
}
