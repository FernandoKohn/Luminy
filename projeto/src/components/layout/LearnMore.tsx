import styles from './LearnMore.module.css'

export const LearnMore = () => {
  return (
    <div className={styles.main}>
        <h1>Como reduzir</h1>
        <h1>gastos por</h1>
        <h1 className={styles.mark}>25%?</h1>
        <div id={styles.button}>
            <p>Aprenda mais</p>
        </div>
    </div>
  )
}
