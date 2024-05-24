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
                <div className={styles.li}>
                    <i className='bx bxs-dashboard'></i>
                    <p>DASHBOARD</p>
                </div>
                <div className={styles.li}>
                    <i className='bx bxs-user-pin' ></i>
                    <p>USUÁRIO</p>
                </div>
            </div>
            <div className={styles.userInfo}>
                {context.user.img ? (
                    <div className={styles.userImg}>
                        context.user.img
                    </div>
                ) : (
                    <div className={styles.userSetImg}>
                        <Tooltip title="Adicione uma foto">
                            <i className='bx bx-user-circle' ></i>
                        </Tooltip>
                        <p>{context.user.user}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

