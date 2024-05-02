import styles from "./Dashboard.module.css"
import { Link, useOutletContext } from "react-router-dom"

export const Dashboard = () => {

  const context:any = useOutletContext()

  return (
    <div>
      Dashboard
      {context.user.user}
      <Link to="/">Voltar</Link>
    </div>
  )
}

