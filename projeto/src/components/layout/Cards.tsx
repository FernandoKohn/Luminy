import { useState } from "react"
import styles from "./Cards.module.css"
import { Select } from "antd";
import { InputNumber } from "antd";
import { DateInput } from 'rsuite';
import 'rsuite/DateInput/styles/index.css';
import { getMonth } from "../functions/functions";



export const Cards = () => {

  const [card, setCard] = useState('')
  const [cardFlag, setCardFlag] = useState()
  const [cardLimit, setCardLimit] = useState()
  const [cardExpire, setCardExpire] = useState()
  const [toggleCard, setToggleCard] = useState(false)
  const [newCard, setNewCard] = useState(false)

  

  const handleSelect = e => {
    setCard(e.target.value)
  }

  const handleCardFlag = value => {
    return setCardFlag(value)
  }

  const handleCardLimit = value => {
    return setCardLimit(value)
  }

  const handleCardExpire = value => {
    return setCardExpire(value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const test = new Date(cardExpire)
    console.log(test)
    console.log(cardExpire)
    console.log(test.getMonth())
    console.log(test.getFullYear())
  }

  return (
    <div className={styles.main}>
      {newCard === true ? (
        <div className={styles.addCard}>
          <h1>Adicione um cartão</h1>
          <i className='bx bx-arrow-back' id={styles.arrowBack} onClick={() => setNewCard(!newCard)}></i>
          <div className={styles.line}></div>
          <form onSubmit={handleSubmit}>
            <Select
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
            <InputNumber onChange={handleCardLimit} required maxLength={7} name="valor" prefix="R$" placeholder="Limite" style={{ width: 408, marginTop: 30, marginBottom: 15 }} />
            <DateInput onChange={handleCardExpire} format="MM/yyyy" />
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
                <div className={styles.backCardPlat} onClick={() => { setToggleCard(!toggleCard) }}>
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
                <div className={styles.backCardPlat} id={styles.backcardOuro} onClick={() => { setToggleCard(!toggleCard) }}>
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
