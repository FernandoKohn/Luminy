import { useState } from "react"
import { Navbar } from "../layout/Navbar"
import styles from "./Root.module.css"
import { Home } from "./Home"


export const Root = () => {

    const [user, setUser] = useState([])

    return (
        <div className={styles.main}>
            <Navbar isLogged={user.length ? true : false} />
            <div className={styles.routes}>
                <Home/>
            </div>
        </div>
    )
}

