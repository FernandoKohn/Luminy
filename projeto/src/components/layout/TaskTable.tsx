import styles from "./TaskTable.module.css"

export const TaskTable = ({Recados}) => {
    return (
        <div className={styles.taskBoard}>
            <div className={styles.taskHeader}>
                <div>
                    <h1>Recados</h1>
                    <p>0 Total</p>
                </div>
                <div>
                    <div>
                        <h1>Número</h1>
                        <p>Finalizados</p>
                    </div>
                    <div>
                        <h1>Número</h1>
                        <p>Em andamento</p>
                    </div>
                </div>
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
                    {Recados && (
                        Recados.map((recado: any) => {
                            <tbody>
                                <tr>{recado.nome}</tr>
                                <tr>{recado.nome}</tr>
                                <tr></tr>
                                <tr></tr>
                            </tbody>
                        })
                    )}
            </table>
        </div>
    )
}

