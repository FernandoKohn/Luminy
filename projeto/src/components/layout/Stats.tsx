import styles from "./Stats.module.css"

export const Stats = () => {
    return (
        <div className={styles.stats}>
            <div className={styles.graph}>
                <div className={styles.graphHeader}>
                    <h1>Produtividade</h1>
                    <div className={styles.legenda}>
                        <div className={styles.blue}></div>
                        <p>Em andamento</p>
                        <div className={styles.green}></div>
                        <p>Concluidos</p>
                        <div className={styles.purple}></div>
                        <p>Descontinuados</p>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.chart}>
                        <div className={styles.chartBar1}></div>
                        <div className={styles.chartNumber}>101</div>
                    </div>
                    <div className={styles.chart}>
                        <div className={styles.chartBar2}></div>
                        <div className={styles.chartNumber}>101</div>
                    </div>
                    <div className={styles.chart}>
                        <div className={styles.chartBar3}></div>
                        <div className={styles.chartNumber}>101</div>
                    </div>
                </div>
            </div>
            <div className={styles.activeTasks}>

            </div>
        </div>
    )
}
