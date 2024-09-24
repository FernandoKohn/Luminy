import { useState } from 'react';
import styles from './QuickTransfer.module.css'
import { InputNumber } from "antd";

export const QuickTransfer = () => {

  const [changeButton, setChangeButton] = useState(false)

  const handleChangeButton = e => {
    setChangeButton(true)
    setInterval(() => {
      setChangeButton(false)
    }, 5000)
  }

  return (
    <div className={styles.main}>
      <p>Transferencia rápida</p>
      <div className={styles.profilePic}>
        <img className={styles.profilePic} src="https://avatar.iran.liara.run/public/90" alt="Profile Picture" />
        <img className={styles.profilePic} src="https://avatar.iran.liara.run/public/29" alt="Profile Picture" />
        <img className={styles.profilePic} src="https://avatar.iran.liara.run/public/73" alt="Profile Picture" />
        <img className={styles.profilePic} src="https://avatar.iran.liara.run/public/45" alt="Profile Picture" />
        <img className={styles.profilePic} src="https://avatar.iran.liara.run/public/54" alt="Profile Picture" />
        <i className='bx bx-plus' id={styles.plus}></i>
      </div>
      <InputNumber required maxLength={7} name="valor" prefix="R$" placeholder="Valor" style={{ width: '100%', height: '50px', borderRadius: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
      {changeButton == false ? (
        <div className={styles.button} onClick={handleChangeButton}>
          <p>Transferir</p>
        </div>
      ) : (
        <div className={styles.button2}>
          <i className='bx bx-check'></i>
        </div>
      )}
    </div>
  )
}
