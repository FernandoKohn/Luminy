import { useState } from "react"
import { NavbarDashBoard } from "../layout/NavbarDashBoard"
import styles from "./Dashboard.module.css"
import { Link, useOutletContext } from "react-router-dom"

export const Dashboard = () => {

  const [querry, setQuerry] = useState()

  const context: any = useOutletContext()

  return (
    <div className={styles.main}>
      <NavbarDashBoard />
      <div className={styles.dashboard}>
        <div className={styles.searchBar}>
          <input type="text" value={querry} placeholder="Buscar" id={styles.searc}/>
        </div>
      </div>
    </div>
  )
}

