import { useState } from "react"
import { NavbarDashBoard } from "../layout/NavbarDashBoard"
import styles from "./Dashboard.module.css"
import { Link, useOutletContext } from "react-router-dom"
import { TaskTable } from "../layout/TaskTable"

export const Dashboard = () => {

  const [querry, setQuerry] = useState()
  const [recados, setRecados] = useState()

  const context: any = useOutletContext()

  return (
    <div className={styles.main}>
      <NavbarDashBoard />
      <div className={styles.dashboard}>
        <div className={styles.searchBar}>
          <input type="text" value={querry} placeholder="Buscar" id={styles.search} />
        </div>
        <TaskTable recados={recados} />
        <div className={styles.stats}>
          <div className={styles.graph}>
            <h1>Produtividade</h1>
            <div className={styles.legenda}></div>
            <div className={styles.info}>
              <div className={styles.chart}>
                <div className={styles.chartBar}></div>
                <div className={styles.chartNumber}>101</div>
              </div>
              <div className={styles.chart}>
                <div className={styles.chartBar}></div>
                <div className={styles.chartNumber}>101</div>
              </div>
              <div className={styles.chart}>
                <div className={styles.chartBar}></div>
                <div className={styles.chartNumber}>101</div>
              </div>
            </div>
          </div>
          <div className={styles.activeTasks}>
            <h1>a</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

