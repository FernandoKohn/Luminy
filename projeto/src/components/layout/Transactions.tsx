import styles from "./Transactions.module.css"
import { useState } from "react"
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export const Transactions = ({ userData, card }) => {



    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <p>Transações recentes</p>
                <Accordion className={styles.accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{color: "white"}} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Adicionar transação
                    </AccordionSummary>
                    <AccordionDetails>
                        <form ></form>
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
