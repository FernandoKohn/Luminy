import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"


export const Navbar = ({ user }: any) => {

    return (
        <div className={styles.main}>
            <div className={styles.blockOne}>
                <h1>LUMINY</h1>
            </div>
            <div className={styles.blockTwo}>
                <h1 className={styles.blockTwoTitle}>O caminho para seu conforto financeiro.</h1>
                {user ? (

                    <Link to={`/Dashboard/${user.user}`} className={styles.button} id={styles.dashboard}>
                        <h1>MENU</h1>
                    </Link>
                ) : (
                    <Link to={"/Login"} className={styles.button}>
                        <h1>LOGIN</h1>
                    </Link>
                )}
            </div>
        </div>
    )
}