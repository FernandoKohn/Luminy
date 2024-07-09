import { useState } from "react"
import { NavbarDashBoard } from "../layout/NavbarDashBoard"
import styles from "./Dashboard.module.css"
import { Link, useOutletContext } from "react-router-dom"
import { TaskTable } from "../layout/TaskTable"
import { Stats } from "../layout/Stats"
import { Searchbar } from "../layout/Searchbar"
import { CreateTask } from "../layout/CreateTask"

export const Dashboard = () => {

  const [recados, setRecados] = useState()
  const [showCreateTask, setshowCreateTask] = useState()

  return (
    <div className={styles.main}>
      <NavbarDashBoard />
      <div className={styles.dashboard}>
        <Searchbar />
        <TaskTable recados={recados} />
        <Stats />
      </div>
      <div className={styles.createTask}>
        <CreateTask />
      </div>
    </div>
  )
}

