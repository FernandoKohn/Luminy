import styles from "./Navbar.module.css"
import Logo from "../../img/icons/LogoWhite.png"
import { Link, useLocation, useOutletContext } from "react-router-dom"


export const Navbar = ({ user, setUser }: any) => {

    const url = useLocation()

    const logOut = () => {
        setUser(null)
    }

    return (
        <div className={styles.main}>
            <div className={styles.blockOne}>
                <h1>LUMINY</h1>
            </div>
            <div className={styles.blockTwo}>
                <h1 className={styles.blockTwoTitle}>O caminho para seu conforto financeiro.</h1>
                <Link to={"/Login"} className={styles.button}>
                    <h1>LOGIN</h1>
                </Link>
            </div>
        </div>
    )
}