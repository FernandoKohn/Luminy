import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styles from "./Register.module.css"
import axios from "axios";
import Alert from '@mui/material/Alert';
import { severity } from "../../types/severity";
import { v4 as uuidv4 } from 'uuid';

export const Register = () => {

    const [usuario, setUsuario] = useState([])
    const [message, setMessage] = useState("")
    const [messageType, setmessageType] = useState<severity>("success")
    const id = uuidv4()


    const jsonServer = axios.create({
        baseURL: 'https://luminy.glitch.me/user'
    })

    useEffect((() => {
        jsonServer.get('').then(resp => setUsuario(resp.data)).catch(err => console.log(err))
    }), [])
    

    const handleSubmit = (e: any) => {
        e.preventDefault()
        var data = new FormData(e.target)
        data.set("id", id)
        let value: any = Object.fromEntries(data.entries())
        value.visa = []
        value.mastercard = []
        value.elo = []
        for (let index of usuario) {
            if (index.user === data.get("user")) {
                setmessageType("error")
                return setMessage("Usuário já cadastrado")
            }
        }
        jsonServer.post('', value).then((resp) => {setMessage("Cadastrado com sucesso!");setUsuario(resp.data)})
    }

    return (
        <div className={styles.main}>
            {message && (
                <Alert severity={messageType}>{message}</Alert>
            )}

            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <h1>CADASTRE-SE</h1>
                <p> COMECE A APROVEITAR OS BENEFÍCIOS HOJE MESMO!</p>
                <label htmlFor="user" >USUÁRIO</label>
                <input type="text" id="user" name="user" maxLength={25} required />
                <label htmlFor="user">SENHA</label>
                <input type="password" id="password" name="password" minLength={6} maxLength={12} required />
                <Link to="/ResetPassword">
                    <p id={styles.forgotPassword}>ESQUECEU A SENHA?</p>
                </Link>
                <button type="submit">CADASTRAR</button>
            </form>
            <div>
                <h1>JÁ É CADASTRADO?</h1>
                <Link to={"/Login"}>
                    <h1>LOGIN</h1>
                </Link>
            </div>
        </div>
    )
}

