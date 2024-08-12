import { useState } from "react"
import styles from "./Cards.module.css"

export const Cards = () => {

  const [card, setCard] = useState(false)

  return (
    <div className={styles.main}>
      <div className={styles.cards}>
        {card === false ? (
          <>
            <div className={styles.backCardPlat} onClick={() => {setCard(!card)}}>
              <header>
                <p>Platina</p>
                <p>R$350.20</p>
              </header>
            </div>
            <div className={styles.frontCard}>
              <div className={styles.cardHeader}>
                <p>Ouro</p>
                <img src={require("../../img/icons/cardShip.png")} alt="credit card ship" />
              </div>
              <p className={styles.value}>R$400.00</p>
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
            <div className={styles.backCardPlat} id={styles.backcardOuro} onClick={() => {setCard(!card)}}>
              <header>
                <p>Ouro</p>
                <p>R$350.20</p>
              </header>
            </div>
            <div className={styles.frontCard} id={styles.frontCardPlat}>
              <div className={styles.cardHeader}>
                <p>Platina</p>
                <img src={require("../../img/icons/cardShip.png")} alt="credit card ship" />
              </div>
              <p className={styles.value}>R$400.00</p>
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
              <div className={styles.cardInfo}>
                <div>
                  <p>Limite:</p>
                  <p>R$300.5</p>
                </div>
                <div>
                  <p>Utilizado:</p>
                  <p>R$300.5</p>
                </div>
                <div>
                  <p>Moeda</p>
                  <p>BRL</p>
                </div>
              </div>
            </div>
            <div className={styles.newCard}>
                <i className='bx bx-plus'></i>
                <h1>Adicionar novo cartão</h1>
            </div>
    </div>
  )
}
