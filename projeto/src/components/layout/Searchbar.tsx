import styles from "./Searchbar.module.css"
import { useState } from "react"

export const Searchbar = () => {

    const [querry, setQuerry] = useState()

    return (
        <div className={styles.searchBar}>
            <input type="text" value={querry} placeholder="Buscar" id={styles.search} />
            <div className={styles.newTaskButton}><i className='bx bx-plus'></i>Novo recado</div>
        </div>
    )
}
