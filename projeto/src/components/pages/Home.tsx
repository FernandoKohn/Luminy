import styles from "./Home.module.css"
import { useState } from "react"
import light_off from "../../img/light_off.png"
import light_on from "../../img/light_on.png"
import placeholder from "../../img/placeholder.jpg"
import { Link } from "react-router-dom"
import {Navbar} from "../layout/Navbar"

export const Home = () => {

    const [src, setSrc] = useState<boolean>(true)
    const [logged, setLogged] = useState<boolean>(true)

    return (
        <div className={styles.main}>
            <Navbar isLogged={false}></Navbar>
            <section className={src ? styles.section1_off : styles.section1_on}>
                {src === false && (
                    <>
                        <div className={styles.ilumine}>
                            <h1>ILU</h1>
                            <h1>MINE</h1>
                        </div>
                        <h1 className={styles.suaGestao}>sua gestão!</h1>
                    </>
                )}
                <img className={styles.lightbulb} src={src ? light_off : light_on} alt="Light Bulb" onClick={() => setSrc(!src)} />
            </section>
            <section className={styles.section2}>
                <h1>Experimente Luminy hoje mesmo</h1>
                <h1>e liberte sua empresa do caos dos recados!</h1>
                <p>Com Luminy, sua empresa ganha eficiência e organização, centralizando todos os recados em um único lugar acessível.</p>
                <div className={styles.bannerContainer}>
                    <div className={styles.banner}>
                        <img src={placeholder} alt="banner" />
                        <p>Descrição</p>
                    </div>
                    <div className={styles.banner}>
                        <img src={placeholder} alt="banner" />
                        <p>Descrição</p>
                    </div>
                    <div className={styles.banner}>
                        <img src={placeholder} alt="banner" />
                        <p>Descrição</p>
                    </div>
                </div>
            </section>
            <section className={styles.section3}>
                <h1>CALL TO ACTION</h1>
                <p>DESC</p>
                <Link to="/login">
                   <button className={styles.entrar}>entrar</button>
                </Link>
            </section>  
        </div>
    )
}