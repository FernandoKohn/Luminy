import styles from "./Transactions.module.css"
import ifoodLogo from "../../img/transaction icons/mcdonalds.png"

export const Transactions = () => {
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <p>Transações recentes</p>
                <p>Adicionar</p>
            </div>
            <div className={styles.content}>
                <div>
                    <div>
                        <div>
                            <img className={styles.logo} src={ifoodLogo} alt="" />
                        </div>
                        <div>

                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
