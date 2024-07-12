import styles from "./Transactions.module.css"
import { useState } from "react"

export const Transactions = ({ userData }) => {

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <p>Transações recentes</p>
                <p>Adicionar</p>
            </div>
            <div className={styles.content}>
                {userData && (
                    userData.map((user:any) => (
                        <p>{user.visa}</p>
                    ))
                )}
            </div>
        </div>
    )
}
