import { useState } from "react"
import styles from "./Cards.module.css"
import 'rsuite/DateInput/styles/index.css'



export const Cards = ({ setCard, userData }) => {

  const [toggleCard, setToggleCard] = useState(false)
  const [mutableUser, setMutableUser] = useState(userData)

  var sumBisa = 0
  var sumFaster = 0
  var limit = Math.floor(Math.random() * 5000)

  for (let values of mutableUser.bisa) {
    sumBisa += parseInt(values.valor)
  }
  
  for (let values of mutableUser.fastercard) {
    sumFaster += parseInt(values.valor)
  }

  return (
    <div className={styles.main}>
      <div className={styles.cards}>
        {toggleCard === false ? (
          <>
            <div className={styles.backCardPlat} onClick={() => { setToggleCard(!toggleCard); setCard('fastercard') }}>
              <header>
                <p>Platina</p>
                <p>R$ {sumFaster}</p>
              </header>
            </div>
            <div className={styles.frontCard}>
              <div className={styles.cardHeader}>
                <p>Ouro</p>
                <img src={require("../../img/icons/cardShip.png")} alt="credit card ship" />
              </div>
              <p className={styles.value} style={{color: sumBisa >= limit ? "red" : "black" }}>R$ {sumBisa}</p>
              <div className={styles.info}>
                <div className={styles.spireDate}>
                  <p>*713</p>
                  <p>10/30</p>
                </div>
                <img src={require("../../img/icons/bisa.png")} alt="bisa logo" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={styles.backCardPlat} id={styles.backcardOuro} onClick={() => { setToggleCard(!toggleCard); setCard('bisa') }}>
              <header>
                <p>Ouro</p>
                <p>R$ {sumBisa}</p>
              </header>
            </div>
            <div className={styles.frontCard} id={styles.frontCardPlat}>
              <div className={styles.cardHeader}>
                <p>Platina</p>
                <img src={require("../../img/icons/cardShip.png")} alt="credit card ship" />
              </div>
              <p className={styles.value} style={{color: sumFaster >= limit ? "red" : "black" }}>R$ {sumFaster}</p>
              <div className={styles.info}>
                <div className={styles.spireDate}>
                  <p>*713</p>
                  <p>10/30</p>
                </div>
                <img src={require("../../img/icons/blastercard.png")} id={styles.blasterCard} alt="blaster logo" />
              </div>
            </div>
          </>
        )}
      </div>
      <div className={styles.bottomInfo}>
        {toggleCard === false ? (
          <div className={styles.cardInfo}>
          <div>
            <p>Limite:</p>
            <p>R$ {limit}</p>
          </div>
          <div>
            <p>Utilizado:</p>
            <p>R$ {sumBisa}</p>
          </div>
          <div id={styles.moeda}>
            <p>Moeda:</p>
            <p>BRL</p>
          </div>
        </div>
        ) : (
          <div className={styles.cardInfo}>
          <div>
            <p>Limite:</p>
            <p>R$ {limit}</p>
          </div>
          <div>
            <p>Utilizado:</p>
            <p>R$ {sumFaster}</p>
          </div>
          <div id={styles.moeda}>
            <p>Moeda:</p>
            <p>BRL</p>
          </div>
        </div>
        ) }
      </div>
    </div>
  )
}
