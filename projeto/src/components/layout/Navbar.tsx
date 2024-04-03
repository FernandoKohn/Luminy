import styles from "./Navbar.module.css"
import Logo from "../../img/luminyLogo.png"
import { Link } from "react-router-dom"

type props = {
    isLogged: boolean
}

export const Navbar = (props: props) => {
    return (
        <div className={styles.main}>
            <div className={styles.logo}>
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
                <Link to="/sobre">
                    <h1>Sobre</h1>
                </Link>
            </div>
            <div className={styles.userLogin}>
                {props.isLogged ? (
                    <div className={styles.logged}>
                        <i className='bx bxs-user'></i>
                    </div>
                ) : (
                    <div className={styles.notLogged}>
                        <Link to="/login">
                            <h1>Login</h1>
                        </Link>
                        <h1>/</h1>
                        <Link to="/registrar">
                            <h1>Registrar</h1>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}