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
            <div className={styles.content}>
                <div className={styles.logoDiv}>
                    <Link to="/" className={styles.linkDiv}>
                        <img src={Logo} alt="Logo" />
                    </Link>
                    <div className={styles.aboutDashboard}>
                        <Link to="/Sobre" className={styles.linkDiv}>
                            <h1>Sobre</h1>
                        </Link>
                        <Link to="/" className={styles.linkDiv}>
                            <h1>Home</h1>
                        </Link>
                        {user && (
                            <Link to={`/Dashboard/${user.user}`} className={styles.linkDiv}>
                                <h1>Dashboard</h1>
                            </Link>
                        )}
                    </div>
                </div>
                <div className={styles.userLogin}>
                    <Link to="/Login" className={styles.toRegister}>
                        <h1>Registrar</h1>
                    </Link>
                    <Link to="/Registrar" className={styles.toLog}>
                        <h1>Logar</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}