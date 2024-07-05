import styles from "./NavbarDashBoard.module.css"
import logo from "../../img/luminyLogo.png"
import { useOutletContext } from "react-router-dom"
import { Tooltip } from '@mui/material';

export const NavbarDashBoard = () => {
    const context: any = useOutletContext()

    return (
        <div className={styles.main}>
            <div className={styles.navlist}>
                <img id={styles.luminyLogo} src={logo} alt="Luminy Logo" />
                <div className={styles.line}></div>
                <div className={styles.li}>
                    <i className='bx bxs-dashboard'></i>
                    <p>Dashboard</p>
                </div>
                <div className={styles.li}>
                    <i className='bx bxs-user-pin' ></i>
                    <p>Usuário</p>
                </div>
            </div>
            <div className={styles.userInfo}>
                {context.user.img ? (
                    <div className={styles.userImg}>
                        context.user.img
                    </div>
                ) : (
                    <div className={styles.userSetImg}>
                        <div className={styles.user}>
                            <Tooltip title="Adicione uma foto" arrow placement="top">
                                <i className='bx bx-message-add' id={styles.userAdd}></i>
                            </Tooltip>
                            <i className='bx bx-user-circle' ></i>
                            
                            <p>{context.user.user}</p>
                        </div>
                        <div className={styles.logOut}>
                            <i className='bx bx-log-in'></i>
                            <p>Log Out</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

