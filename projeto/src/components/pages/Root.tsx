import { useState } from "react"
import { Navbar } from "../layout/Navbar"
import styles from "./Root.module.css"
import { Home } from "./Home"
import { Outlet, useLocation } from "react-router-dom"


export const Root = () => {

    const [user, setUser] = useState(
        {
            "user": "Teste1",
            "password": "123456",
            "id": "5fa9354e-d1f4-4a10-99b7-7fcec175ed5e"
        }
    )
    const location = useLocation()
    const url = location.pathname

    return (
        <div className={styles.main}>
            {(url == "/" || url == "/Dashboard/:user" || url == "/Sobre")  && (
                <Navbar user={user} setUser={setUser}/>
            )}
            <div className={styles.routes}>
                <Outlet context={{user, setUser}}/>
            </div>
        </div>
    )
}

