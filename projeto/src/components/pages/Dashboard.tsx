import { useState } from "react"
import { NavbarDashBoard } from "../layout/NavbarDashBoard"
import styles from "./Dashboard.module.css"
import { useOutletContext } from "react-router-dom"
import { DashboardHeader } from "../layout/DashboardHeader"
import { Transactions } from "../layout/Transactions"



export const Dashboard = () => {

  const [recados, setRecados] = useState()
  const [showCreateTask, setshowCreateTask] = useState()
  const user: any = useOutletContext()
  const userData = user.user

  return (
    <div className={styles.main}>
      <DashboardHeader userData={userData} />
      <NavbarDashBoard />
      <div className={styles.dashboard}>
        <div className={styles.section1}>
          <Transactions />
        </div>
      </div>
    </div>
  )
}

