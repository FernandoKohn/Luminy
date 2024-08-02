import { useState } from "react"
import styles from "./Cards.module.css"

export const Cards = () => {
  
  const [mainCard, setMaincard] = useState()

  return (
    <div className={styles.main}>
      <div className={styles.cards}>
        <div className={styles.lowerCard}></div>
        <div className={styles.mainCard}>
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
      </div>
    </div>
  )
}
