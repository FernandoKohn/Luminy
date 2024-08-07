import { useState } from "react"
import { NavbarDashBoard } from "../layout/NavbarDashBoard"
import styles from "./Dashboard.module.css"
import { useOutletContext } from "react-router-dom"
import { DashboardHeader } from "../layout/DashboardHeader"
import { Transactions } from "../layout/Transactions"
import { Graph } from "../layout/Graph"
import { Cards } from "../layout/Cards"






export const Dashboard = () => {

  const [card, setCard] = useState("visa")
  const [budget, setBudget] = useState(10000)

  const user: any = useOutletContext()
  const userData = user.user
  const setUser = user.setUser
  

  return (
    <div className={styles.main}>
      <DashboardHeader userData={userData} />
      <NavbarDashBoard />
      <div className={styles.dashboard}>
        <div className={styles.section1}>
          <Transactions card={card} userData={userData} setUser={setUser}/>
          <Graph userData={userData} Budget={budget}/>
          <Cards />
        </div>
      </div>
    </div>
  )
}

