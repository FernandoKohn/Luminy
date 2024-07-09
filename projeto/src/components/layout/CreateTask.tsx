import styles from "./CreateTask.module.css"

export const CreateTask = () => {
  return (
    <div className={styles.main}>
      <h1>Hora de anotar!</h1>
      <p>Registre os detalhes do seu recado.</p>
      <form>
        <input type="text" maxLength={20} name="remetente" id="remetente" placeholder="Remetente" />
        <input type="text" maxLength={30} name="assunto" id="assunto" placeholder="Assunto" />
        <input type="text" maxLength={20} name="destinatario" id="destinatario" placeholder="Destinatario" />
        <input type="number" maxLength={10} name="prazo" id="prazo" placeholder="prazo" />
        <input type="text" />
      </form>
    </div>
  )
}
