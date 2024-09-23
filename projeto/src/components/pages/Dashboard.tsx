import { useState } from "react"
import { NavbarDashBoard } from "../layout/NavbarDashBoard"
import styles from "./Dashboard.module.css"
import { useOutletContext } from "react-router-dom"
import { DashboardHeader } from "../layout/DashboardHeader"
import { Transactions } from "../layout/Transactions"
import { Graph } from "../layout/Graph"
import { Cards } from "../layout/Cards"
import { Budget } from "../layout/Budget"
import { QuickTransfer } from "../layout/QuickTransfer"
import { LearnMore } from "../layout/LearnMore"






export const Dashboard = () => {

  const [card, setCard] = useState("bisa")



  const user: any = useOutletContext()
  const userData = user.user
  const setUser = user.setUser


  return (
    <div className={styles.main}>
      <DashboardHeader userData={userData} />
      <NavbarDashBoard />
      <div className={styles.dashboard}>
        <div className={styles.section1}>
          <Transactions card={card} userData={userData} setUser={setUser} />
          <Graph userData={userData} />
          <Cards setCard={setCard} userData={userData} />
          <Budget userData={userData} card={card} />
        </div>
        <div className={styles.section2}>
          <QuickTransfer />
          <LearnMore />
        </div>
      </div>
    </div>
  )
}

