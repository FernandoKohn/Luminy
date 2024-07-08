import styles from "./TaskTable.module.css"

export const TaskTable = ({ recados }) => {
    return (
        <div className={styles.taskBoard}>
            <header className={styles.taskHeader}>
                <h1>Recados</h1>
                <p>0 Total</p>
            </header>
            <div className={styles.tableRow} id={styles.firstRow}>
                <input type="checkbox" name="checkboxAll" id="checkboxAll" />
                <div>
                    <p>Remetente</p>
                </div>
                <div>
                    <p>Remetente</p>
                </div>
                <div>
                    <p>Remetente</p>
                </div>
            </div>
            <div className={styles.tableRow}>
            <input type="checkbox" name="checkboxAll" id="checkboxAll" />
                <div>
                    <p>Remetente</p>
                </div>
                <div>
                    <p>Remetente</p>
                </div>
                <div>
                    <p>Remetente</p>
                </div>
            </div>
            <div className={styles.tableRow}>
            <input type="checkbox" name="checkboxAll" id="checkboxAll" />
                <div>
                    <p>Remetente</p>
                </div>
                <div>
                    <p>Remetente</p>
                </div>
                <div>
                    <p>Remetente</p>
                </div>
            </div>
            <div className={styles.tableRow}>
            <input type="checkbox" name="checkboxAll" id="checkboxAll" />
                <div>
                    <p>Remetente</p>
                </div>
                <div>
                    <p>Remetente</p>
                </div>
                <div>
                    <p>Remetente</p>
                </div>
            </div>
            <div className={styles.tableRow}>
            <input type="checkbox" name="checkboxAll" id="checkboxAll" />
                <div>
                    <p>Remetente</p>
                </div>
                <div>
                    <p>Remetente</p>
                </div>
                <div>
                    <p>Remetente</p>
                </div>
            </div>
        </div>
    )
}

