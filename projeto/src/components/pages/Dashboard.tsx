import { useState } from "react"
import { NavbarDashBoard } from "../layout/NavbarDashBoard"
import styles from "./Dashboard.module.css"
import { TaskTable } from "../layout/TaskTable"
import { Stats } from "../layout/Stats"
import bellIcon from "./../../img/icons/icons8-lembrete-de-compromissos-60.png"
import { useOutletContext } from "react-router-dom"
import { Tooltip } from "@mui/material"


export const Dashboard = () => {

  const [recados, setRecados] = useState()
  const [showCreateTask, setshowCreateTask] = useState()
  const user: any = useOutletContext()
  const userData = user.user

  return (
    <div className={styles.main}>
      <header className={styles.dashboardHeader}>
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
      <NavbarDashBoard />
      <div className={styles.dashboard}>
        <TaskTable recados={recados} />
        <Stats />
      </div>
    </div>
  )
}

