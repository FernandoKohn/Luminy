import styles from "./TaskTable.module.css"

export const TaskTable = ({ recados }) => {
    return (
        <div className={styles.taskBoard}>
            <div className={styles.taskHeader}>
                <h1>Recados</h1>
                <p>0 Total</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>Assunto</td>
                        <td>Nome</td>
                        <td>Destinatário</td>
                        <td>Estatus</td>
                        <td>Prazo</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                    </tr>
                    <tr>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                    </tr>
                    <tr>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                    </tr>
                    <tr>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

