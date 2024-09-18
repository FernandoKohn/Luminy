import styles from "./Transactions.module.css"
import { useEffect, useState } from "react"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Select } from "antd";
import { InputNumber } from "antd";
import axios from "axios";
import { getDay } from "../functions/functions";

export const Transactions = ({ userData, card, setUser }) => {

    const [selectValue, setSelectValue] = useState({})
    const [mutableUser, setmutableUser] = useState(userData)
    

    const jsonServer = axios.create({
        baseURL: 'https://luminy.glitch.me/user'
    })

    const handleSelect = (value: any) => {
        setSelectValue(value)
    }


    const handleChange = (event: any) => {
        event.preventDefault()
        let data = new FormData(event.target)
        let value: any = Object.fromEntries(data.entries())
        let dia = new Date().getDay()
        var hora = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        value.id = selectValue
        value.dia = getDay(dia)
        value.hora = hora

        if (card == "bisa") {
            mutableUser.bisa.push(value)

        } else if (card == "fastercard") {
            mutableUser.fastercard.push(value)
        }

        if (mutableUser.bisa.length > 6) {
            var lastBisa = mutableUser.bisa.shift()
        } else if (mutableUser.fastercard.lengt > 6) {
            var lastFaster = mutableUser.fastercard.shift()
        }

        jsonServer.patch(`/${userData.id}`, mutableUser).then((resp) => { setUser(resp.data) })
    }

    const resetdb = () => {
        if (card == "bisa") {
            mutableUser.bisa = []
        } else if (card == "fastercard") {
            mutableUser.fastercard = []
        }

        jsonServer.patch(`/${userData.id}`, mutableUser).then((resp) => { setUser(resp.data) })
    }


    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <div className={styles.delete} onClick={resetdb}>
                    <i className='bx bx-revision'></i>
                </div>
                <p>Transações recentes</p>
                <p id={styles.selectedCard}>{card}</p>
                <Accordion sx={{ backgroundColor: "black", color: "white", width: "240px", display: "flex", flexDirection: "column" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Adicionar transação
                    </AccordionSummary>
                    <AccordionDetails>
                        <form onSubmit={handleChange} className={styles.transactionForm}>
                            <Select
                                showSearch
                                onChange={handleSelect}
                                style={{ width: 200 }}
                                placeholder="No que foi gasto?"
                                optionFilterProp="label"
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                options={[
                                    {
                                        value: 'Comida',
                                        label: 'Comida',

                                    },
                                    {
                                        value: 'Compras',
                                        label: 'Compras',

                                    },
                                    {
                                        value: 'Finanças',
                                        label: 'Finanças',

                                    },
                                    {
                                        value: 'Lazer',
                                        label: 'Lazer',

                                    },
                                    {
                                        value: 'Viagem',
                                        label: 'Viagem',

                                    },
                                    {
                                        value: 'Etc',
                                        label: 'Etc',

                                    },
                                ]}
                            />
                            <InputNumber required maxLength={7} name="valor" prefix="R$" placeholder="Valor" style={{ width: '200px' }} />
                            <button type="submit">Cadastrar</button>
                        </form>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className={styles.content}>
                {(userData && card == "bisa") && (
                    userData.bisa.toReversed().map((compra: any, index: any) => (
                        <div key={index} className={styles.transactionsCard}>
                            <div className={styles.leftDiv}>
                                <img src={require(`../../img/transactionIcons/${compra.id}.png`)} alt="icone" />
                                <div className={styles.info}>
                                    <p>{compra.id}</p>
                                    <div className={styles.infoDayHour}>
                                        <p>{compra.dia}</p>
                                        <p className={styles.dot}>.</p>
                                        <p>{compra.hora}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.rightDiv}>
                                <p>- R${compra.valor}</p>
                            </div>
                        </div>
                    ))
                )}
                {(userData && card == "fastercard") && (
                    userData.fastercard.toReversed().map((compra: any, index: any) => (
                        <div key={index} className={styles.transactionsCard}>
                            <div className={styles.leftDiv}>
                                <img src={require(`../../img/transactionIcons/${compra.id}.png`)} alt="icone" />
                                <div className={styles.info}>
                                    <p>{compra.id}</p>
                                    <div className={styles.infoDayHour}>
                                        <p>{compra.dia}</p>
                                        <p className={styles.dot}>.</p>
                                        <p>{compra.hora}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.rightDiv}>
                                <p>- R${compra.valor}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
