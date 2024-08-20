import { useState } from "react"
import styles from "./Cards.module.css"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export const Cards = () => {

  const [card, setCard] = useState('')
  const [toggleCard, setToggleCard] = useState(false)
  const [newCard, setNewCard] = useState(false)


  const handleChange = e => {
    setCard(e.target.value)
  }

  return (
    <div className={styles.main}>
      {newCard === true ? (
        <div className={styles.addCard}>
          <h1>Adicione um cartão</h1>
          <div className={styles.line}></div>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">Bandeira</InputLabel>
            <Select labelId="demo-simple-select-autowidth-label" id="demo-simple-select-autowidth" onChange={handleChange} autoWidth label="Age">
              <MenuItem value={"bisa"}>Bisa</MenuItem>
              <MenuItem value={"fastercard"}>Faster Card</MenuItem>
            </Select>
          </FormControl>
          <div className={styles.newCard} onClick={() => setNewCard(!newCard)}>
            <i className='bx bx-plus'></i>
            <h1>Adicionar novo cartão</h1>
          </div>
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
