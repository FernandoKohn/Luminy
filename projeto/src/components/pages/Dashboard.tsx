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
        <TaskTable recados={recados}/>
        <div className={styles.stats}>
          <div>
            <h1>Recados</h1>
            <div className={styles.lengenda}>
              <p>Concluídos</p>
              <p>Em andamento</p>
              <p>Excluidos</p>
            </div>
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div>
            <h1>a</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

