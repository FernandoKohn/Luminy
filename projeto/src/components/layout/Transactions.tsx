import styles from "./Transactions.module.css"
import { useState } from "react"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Select } from "antd";
import { InputNumber } from "antd";
import axios from "axios";

export const Transactions = ({ userData, card, setUser }) => {

    const [transaction, setTransaction] = useState({})
    const [selectValue, setSelectValue] = useState({})

    const jsonServer = axios.create({
        baseURL: 'https://luminy.glitch.me/user'
    })

    const handleSelect = (value : any) => {
        setSelectValue(value)
    }

    const getDay = (day: number) => {
        if(day === 1){
            return "Segunda";
          }
          else if(day === 2){
            return "Terça";
          }
          else if(day === 3){
            return "Quarta";
          }
          else if(day === 4){
            return "Quinta";
          }
          else if(day === 5){
            return "Sexta";
          }
          else if(day === 6){
            return "Sabado";
          }
          else{
            return "Domingo";
          }
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
        if (card == "visa") {
            userData.visa.push(value)
        } else if (card == "mastercard") {
            userData.mastercard.push(value)
        } else if (card == "elo") {
            userData.elo.push(value)
        }
        jsonServer.post('/id/:user', value).then((resp) => {setUser(resp.data)})
    }


    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <p>Transações recentes</p>
                <Accordion sx={{ backgroundColor: "black", color: "white", width: "240px", display:"flex", flexDirection: "column"}}>
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
                                ]}
                            />
                            <InputNumber required maxLength={7} name="valor" prefix="R$" placeholder="Valor" style={{ width: '200px'}} />
                            <button type="submit">Cadastrar</button>
                        </form>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className={styles.content}>
                {(userData && card == "visa") && (
                    userData.visa.map((compra: any, index: any) => (
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
                {(userData && card == "mastercard") && (
                    userData.mastercard.map((compra: any, index: any) => (
                        <div key={index}>
                            <p>{compra.id}</p>
                            <p>{compra.valor}</p>
                        </div>
                    ))
                )}
                {(userData && card == "elo") && (
                    userData.elo.map((compra: any, index: any) => (
                        <div key={index}>
                            <p>{compra.id}</p>
                            <p>{compra.valor}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
