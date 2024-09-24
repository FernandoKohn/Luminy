import styles from "./Home.module.css"
import { useState, useEffect } from "react"
import light_off from "../../img/12237.svg"
import light_on from "../../img/12236.svg"
import placeholder from "../../img/placeholder.jpg"
import { Link } from "react-router-dom"
import axios from "axios";



export const Home = () => {
    
    const [src, setSrc] = useState<boolean>(true)

    const jsonServer = axios.create({
        baseURL: 'https://luminy.glitch.me/user'
    })

    useEffect(() => {
        jsonServer.get("").catch(err => console.log(err))
    }, [])


    return (
        <div className={styles.main}>
            <div className={styles.home}>
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
                    <Link to="/Login">
                        <button className={styles.entrar}>entrar</button>
                    </Link>
                </section>
            </div>
        </div>
    )
}
