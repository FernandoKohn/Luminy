import styles from "./Navbar.module.css"
import Logo from "../../img/luminyLogo.png"
import { Link, useLocation, useOutletContext } from "react-router-dom"


export const Navbar = ({user, setUser}: any) => {

    const url = useLocation()
    
    const logOut = () => {
        setUser(null)
    }

    return (
        <div className={styles.main}>
            <div className={styles.logo}>
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
                <Link to="/Sobre">
                    <h1>Sobre</h1>
                </Link>
                {user && (
                    <Link to={`/Dashboard/${user.user}`} >
                        <h1>Dashboard</h1>
                    </Link>
                )}
            </div>
            <div className={styles.userLogin}>
                {user ? (
                    <div className={styles.logged}>
                        <i className='bx bxs-user'></i>
                        <p onClick={logOut}>Deslogar</p>
                    </div>
                ) : (
                    <div className={styles.notLogged}>
                        <Link to="/Login">
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