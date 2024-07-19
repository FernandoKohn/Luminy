import styles from "./NavbarDashBoard.module.css"
import logo from "../../img/Logo1.png"
import { Link, useNavigate, useOutletContext, useParams } from "react-router-dom"
import Tooltip from '@mui/material/Tooltip';

export const NavbarDashBoard = () => {
    const user: any = useOutletContext()
    const userData = user.user
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser(null)
        navigate("/")
    }

    return (
        <div className={styles.main}>
            <img src={logo} className={styles.luminyLogo} alt="luminy_logo" />
            <div className={styles.li}>
                <div>
                    <Link to={"/"}>
                        <Tooltip title="Início" placement="right">
                            <i className='bx bx-home-alt-2'></i>
                        </Tooltip>
                    </Link>
                    <Link to={`/Dashboard/${userData.user}`}>
                        <Tooltip title="Dashboard" placement="right">
                            <i className='bx bx-cube-alt'></i>
                        </Tooltip>
                    </Link>
                    <Link to={"/Sobre"}>
                        <Tooltip title="Sobre" placement="right">
                            <i className='bx bx-message-square-dots'></i>
                        </Tooltip>
                    </Link>
                    <Link to={`/User/${userData.user}`}>
                        <Tooltip title="Início" placement="right">
                            <i className='bx bx-group'></i>
                        </Tooltip>
                    </Link>
                </div>
                <footer>
                    <Tooltip title="Sair" placement="right">
                        <i className='bx bx-log-in-circle' onClick={logOut}></i>
                    </Tooltip>
                </footer>
            </div>
        </div>
    )
}





