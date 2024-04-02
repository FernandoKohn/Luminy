import styles from "./Navbar.module.css"
import Logo from "../../img/luminyLogo.png"
import {Link} from "react-router-dom"

interface props {
    isLoged: boolean
}

export const Navbar = (props: props) => {
    return (
        <div className={styles.main}>
            <div className={styles.Logo}>
                <img src={Logo} alt="Logo" /> 
                <Link to="/sobre">
                    <h1>Sobre</h1>
                </Link>
            </div>
            <div className={styles.userLogin}>
                {props.isLoged ? (
                    
                ) : (

                )}
            </div>
        </div>
    )
}