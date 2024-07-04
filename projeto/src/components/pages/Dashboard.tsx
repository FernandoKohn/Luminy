import { useState } from "react"
import { NavbarDashBoard } from "../layout/NavbarDashBoard"
import styles from "./Dashboard.module.css"
import { Link, useOutletContext } from "react-router-dom"
import { TaskTable } from "../layout/TaskTable"

export const Dashboard = () => {

  const [querry, setQuerry] = useState()
  const [recados, setRecados] = useState({
    "Assunto": "Teste1",
    "Nome": "Teste1",
    "Destinatário": "Teste1",
    "Estatus": "Teste1",
    "Prazo": "Teste1"
  })

  const context: any = useOutletContext()

  return (
    <div className={styles.main}>
      <NavbarDashBoard />
      <div className={styles.dashboard}>
        <div className={styles.searchBar}>
          <input type="text" value={querry} placeholder="Buscar" id={styles.search} />
        </div>
        <TaskTable Recados={recados}/>
      </div>
    </div>
  )
}

