import styles from "./Home.module.css"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios";
import Marquee from "react-fast-marquee";



export const Home = () => {


    const jsonServer = axios.create({
        baseURL: 'https://luminy.glitch.me/user'
    })

    useEffect(() => {
        jsonServer.get("").catch(err => console.log(err))
    }, [])

    console.log(document.getElementById(styles.eyes))


    return (
        <div className={styles.main}>
            <div className={styles.home}>
                <section className={styles.section1}>
                    <h1>ILUMINY</h1>
                    <h1>SUA ECONOMIA</h1>
                    <div className={styles.ball}></div>
                    <div className={styles.eyes}>
                        <div className={styles.eyeBall}>
                            <div className={styles.pupil}></div>
                        </div>
                        <div className={styles.eyeBall}>
                            <div className={styles.pupil}></div>
                        </div>
                    </div>
                </section>
                <section className={styles.section2}>
                    <div className={styles.left}>
                        <div className={styles.warning}>
                            <i className='bx bx-error-circle'></i>
                            <h1>Quando e no que foi gasto?</h1>
                        </div>
                        <div className={styles.imgContainer1}></div>
                        <div className={styles.info}>
                            <div>
                                <h1>O seu registro completo</h1>
                                <i className='bx bxs-star' ></i>
                                <i className='bx bxs-star' ></i>
                                <i className='bx bxs-star' ></i>
                                <i className='bx bxs-star-half' ></i>
                            </div>
                            <p>Monitore todos os seus gastos no cartão de crédito com precisão. Registre automaticamente o valor, dia, horário e onde seu dinheiro foi utilizado.</p>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.warning}>
                            <i className='bx bx-error-circle'></i>
                            <h1>Visualize com precisão</h1>
                        </div>
                        <div className={styles.imgContainer2}></div>
                        <div className={styles.info}>
                            <div>
                                <h1>A gama do seus gastos</h1>
                                <i className='bx bxs-star' ></i>
                                <i className='bx bxs-star' ></i>
                                <i className='bx bxs-star' ></i>
                                <i className='bx bxs-star-half' ></i>
                            </div>
                            <p>Tenha uma visão clara e intuitiva de suas finanças com gráficos interativos que detalham todos os seus gastos e custos.</p>

                        </div>
                    </div>
                </section>
                <section className={styles.section3}>
                    <Marquee className={styles.marquee}>
                        <div id={styles.innerDiv}>
                            <p>LIBERDADE FINANCEIRA AO SEU ALCANCE</p>
                            <img src={require('../../img/DropsLogo.png')} alt="" />
                            <p>LIBERDADE FINANCEIRA AO SEU ALCANCE</p>
                            <img src={require('../../img/DropsLogo.png')} alt="" />
                            <p>LIBERDADE FINANCEIRA AO SEU ALCANCE</p>
                            <img src={require('../../img/DropsLogo.png')} alt="" />
                        </div>
                    </Marquee>
                    <div className={styles.colorBanner}></div>
                    <div className={styles.section3Content}>
                        <img src={require("../../img/Luminy badge.png")} alt="Luminy badge" className={styles.badge} />
                        <div className={styles.rightBlock}>
                            <p>Economize, agora</p>
                            <p className={styles.description}>Luiminy é a solução para seu gerenciamento de finanças. Aqui você encontra uma forma <span className={styles.boldSpan}>simples e gratuita de guiar o seu dinheiro</span> para um cenário mais econômico.</p>
                            <Link to={"/Login"} className={styles.button}>
                                <h1>Comece agora</h1>
                                <i className='bx bx-right-arrow-alt'></i>
                            </Link>
                        </div>

                    </div>
                </section>
                <section className={styles.section4}>
                    <h1 className={styles.leftText}>O QUE ESTÁ<br></br> ESPERANDO?</h1>
                    <div className={styles.entrar}>
                        <p>Faça login ou registre-se</p>
                        <Link to={'/Login'} className={styles.entrarLink}>
                            <h1 className={styles.login}>Login</h1>
                        </Link>
                    </div>
                </section>
                <footer id={styles.footer}>
                    <p> © 2024 Fernando Kohn, todos os direitos reservados</p>
                </footer>
            </div>
        </div>
    )
}
