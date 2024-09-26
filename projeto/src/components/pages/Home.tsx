import styles from "./Home.module.css"
import { useState, useEffect } from "react"
import light_off from "../../img/12237.svg"
import light_on from "../../img/12236.svg"
import placeholder from "../../img/placeholder.jpg"
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


    return (
        <div className={styles.main}>
            <div className={styles.home}>
                <section className={styles.section1}>
                    <h1>ILUMINY</h1>
                    <h1>SUAS FINANCAS</h1>
                    <div className={styles.ball}></div>
                </section>
                <section className={styles.section2}>
                    <div className={styles.left}>
                        
                    </div>
                    <div className={styles.right}>

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
