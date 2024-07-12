import { useState } from "react"
import { Navbar } from "../layout/Navbar"
import styles from "./Root.module.css"
import { Home } from "./Home"
import { Outlet, useLocation } from "react-router-dom"


export const Root = () => {

  const [user, setUser] = useState([
    {
      "user": "fernandokohn",
      "password": "fernandokohn",
      "id": "fe83075e-51cf-447c-be98-ed5cd9579c72",
    }
  ])
  const location = useLocation()
  const url = location.pathname

  return (
    <div className={styles.main}>
      {(url == "/" || url == "/Sobre") && (
        <Navbar user={user} setUser={setUser} />
      )}
      <div className={styles.routes}>
        <Outlet context={{ user, setUser }} />
      </div>
    </div>
  )
}

