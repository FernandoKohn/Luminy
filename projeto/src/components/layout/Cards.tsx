import { useEffect, useState } from "react"
import styles from "./Cards.module.css"
import { Select } from "antd"
import { InputNumber } from "antd"
import { DateInput } from 'rsuite'
import 'rsuite/DateInput/styles/index.css'
import { getMonth } from "../functions/functions"
import axios from "axios"



export const Cards = ({ setCard, userData }) => {

  const [cardFlag, setCardFlag] = useState()
  const [cardExpire, setCardExpire] = useState<any>()
  const [cardLimit, setCardLimit] = useState<number>()
  const [toggleCard, setToggleCard] = useState(false)
  const [newCard, setNewCard] = useState(false)
  const [cardInfo, setCardInfo] = useState({})
  const [bisaSum, setBisaSum] = useState<number>()
  const [faserSum, setFasterSum] = useState<number>()
  const [mutableUser, setMutableUser] = useState(userData)
  const [refresh, setRefresh] = useState(false)

  var sumBisa = 0
  var sumFaster = 0

  useEffect(()=>{}, [refresh])

  const jsonServer = axios.create({
    baseURL: 'https://luminy.glitch.me/user'
  })

  const handleCardFlag = value => {
    console.log(value)
    return setCardFlag(value)
  }

  const handleCardExpire = value => {
    const date = new Date(value)
    return setCardExpire(`${getMonth(date.getMonth())}/${date.getFullYear()}`)
  }

  const handleCardLimit = value => {
    return setCardLimit(value)
  }


  const handleSubmit = e => {
    e.preventDefault()

    if (cardFlag == "bisa") {
      mutableUser.bisa = []
      mutableUser.bisaLimit = cardLimit
      mutableUser.bisaExpire = cardExpire 
      setCard("bisa")
    } else if (cardFlag == "fastercard") {
      mutableUser.fastercard = []
      mutableUser.fastercardLimit = cardLimit
      mutableUser.fastercardExpire = cardExpire
      setCard("fastercard")
    }

    jsonServer.patch(`/${userData.id}`, mutableUser).then((resp) => {setMutableUser(resp.data); setRefresh(!refresh) })
    setNewCard(!newCard)
  }

  return (
    <div className={styles.main}>
        <div className={styles.cards}>
          {toggleCard === false ? (
              <>
                <div className={styles.backCardPlat} onClick={() => { setToggleCard(!toggleCard); setCard('Fastercard') }}>
                  <header>
                    <p>Platina</p>
                    <p>R$ 0</p>
                  </header>
                </div>
                <div className={styles.frontCard}>
                  <div className={styles.cardHeader}>
                    <p>Ouro</p>
                    <img src={require("../../img/icons/cardShip.png")} alt="credit card ship" />
                  </div>
                  <p className={styles.value}>R$ 0</p>
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
    </div>
  )
}
