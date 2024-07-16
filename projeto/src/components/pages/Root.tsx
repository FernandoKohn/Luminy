import { useState } from "react"
import { Navbar } from "../layout/Navbar"
import styles from "./Root.module.css"
import { Home } from "./Home"
import { Outlet, useLocation } from "react-router-dom"


export const Root = () => {

  const [user, setUser] = useState(
    {
      "user": "fernandokohn2",
      "password": "fernandokohn2",
      "id": "fe83075e-51cf-447c-be98-ed5cd9579c72",
      "visa":[
        {
          "id":"Compras",
          "valor": 300,
          "dia": "7 de Julho",
          "hora": "11:59"
        },
        {
          "id":"Finanças",
          "valor": 400,
          "dia": "7 de Julho",
          "hora": "11:59"
        },
        {
          "id":"Comida",
          "valor": 400,
          "dia": "7 de Julho",
          "hora": "11:59"
        },
        {
          "id":"Lazer",
          "valor": 400,
          "dia": "7 de Julho",
          "hora": "11:59"
        }
      ] 
    }
  )

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

