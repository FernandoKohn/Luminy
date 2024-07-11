import styles from "./Transactions.module.css"
import { useState } from "react"

export const Transactions = ({ userData }) => {
    console.log(userData)

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <p>Transações recentes</p>
                <p>Adicionar</p>
            </div>
            <div className={styles.content}>
                {userData && (
                    userData.cartoes.map((userData: any) => {
                        <div className={styles.transactionCard} key={userData.cartoes.visa}>
                            <div>
                                <img src={require(`../../img/transaction icons/${userData.cartoes.visa}.png`)} alt="Icone" />
                            </div>
                        </div>
                    })
                )}
            </div>
        </div>
    )
}
