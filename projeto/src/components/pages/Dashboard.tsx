import { NavbarDashBoard } from "../layout/NavbarDashBoard"
import styles from "./Dashboard.module.css"
import { Link, useOutletContext } from "react-router-dom"

export const Dashboard = () => {

  const context: any = useOutletContext()

  return (
    <div className={styles.main}>
      <NavbarDashBoard/>
    </div>
  )
}

