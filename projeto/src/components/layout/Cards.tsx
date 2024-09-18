import { useState } from "react"
import styles from "./Cards.module.css"
import { Select } from "antd";
import { InputNumber } from "antd";
import { DateInput } from 'rsuite';
import 'rsuite/DateInput/styles/index.css';
import { getMonth } from "../functions/functions";



export const Cards = ({setCard}) => {

  const [cardFlag, setCardFlag] = useState()
  const [cardExpire, setCardExpire] = useState()
  const [toggleCard, setToggleCard] = useState(false)
  const [newCard, setNewCard] = useState(false)
  const [cardInfo, setCardInfo] = useState({})

  const handleCardFlag = value => {
    return setCardFlag(value)
  }

  const handleCardExpire = value => {
    return setCardExpire(value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const date = new Date(cardExpire)
    const data = new FormData(e.target)
    var value = Object.fromEntries(data.entries())
    value.flag = cardFlag
    value.expireDate = `${getMonth(date.getMonth())}/${date.getFullYear()}`
    setCardInfo(value)
    setNewCard(!newCard)
  }

  console.log(cardInfo)

  return (
    <div className={styles.main}>
      {newCard === true ? (
        <div className={styles.addCard}>
          <h1>Adicione um cartão</h1>
          <i className='bx bx-arrow-back' id={styles.arrowBack} onClick={() => setNewCard(!newCard)}></i>
          <div className={styles.line}></div>
          <form onSubmit={handleSubmit}>
            <Select
              defaultValue= "Bisa"
              showSearch
              onChange={handleCardFlag}
              style={{ width: 408, marginTop: 20 }}
              placeholder="Bandeira do cartão"
              optionFilterProp="label"
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={[
                {
                  value: 'bisa',
                  label: 'Bisa',
                },
                {
                  value: 'fastercard',
                  label: 'Faster Card',
                }
              ]}
            />
            <InputNumber required maxLength={7} name="limite" prefix="R$" placeholder="Limite" style={{ width: 408, marginTop: 30, marginBottom: 15 }} />
            <DateInput onChange={handleCardExpire} required format="MM/yyyy" />
            <button type="submit" className={styles.newCard}>
              <i className='bx bx-plus'></i>
              <h1>Adicionar novo cartão</h1>
            </button>
          </form>
        </div>
      ) : (
        <>
          <div className={styles.cards}>
            {toggleCard === false ? (
              <>
                <div className={styles.backCardPlat} onClick={() => { setToggleCard(!toggleCard); setCard('fastercard') }}>
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
          <div className={styles.newCard} onClick={() => setNewCard(!newCard)}>
            <i className='bx bx-plus'></i>
            <h1>Adicionar novo cartão</h1>
          </div>
        </>
      )}
    </div>
  )
}
