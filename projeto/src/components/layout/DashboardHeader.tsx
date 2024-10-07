import bellIcon from "./../../img/icons/icons8-lembrete-de-compromissos-60.png"
import styles from "./DashboardHeader.module.css"

export const DashboardHeader = ({ userData }) => {

  return (
    <header className={styles.dashboardHeader}>
      <div className={styles.hamburguer}>
        <i className='bx bx-menu'></i>
      </div>
      <h1>Dashboard</h1>
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
