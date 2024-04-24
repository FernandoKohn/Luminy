import { useEffect, useState } from "react"
import styles from "./Login.module.css"
import { Link } from "react-router-dom"
import axios from "axios";



export const Login = () => {

    const [usuario, setUsuario] = useState([])
    const [error, setError] = useState("")

    const jsonServer = axios.create({
        baseURL: 'https://boatneck-mulberry-chime.glitch.me/user'
    })

    useEffect((()=>{
        jsonServer.get('').then(resp => setUsuario(resp.data))
    }),[])

    const handleSubmit = (e: any): any => {
        e.preventDefault()
        let data = new FormData(e.target)
        let value = Object.fromEntries(data.entries())
        
        for (let index of usuario) {
            if (index.user == data.get("user")) {
                setError("Usuário já cadastrado")
            }
        }
    }
    
    const resetdb = () => {
        jsonServer.delete("/2")
    }

    return (
        <div className={styles.main}>

            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <h1>SIGN IN</h1>
                <p> COMECE A APROVEITAR OS BENEFÍCIOS HOJE MESMO!</p>
                <label htmlFor="user" >USUÁRIO</label>
                <input type="text" id="user" name="user" maxLength={25} required />
                <label htmlFor="user">SENHA</label>
                <input type="password" id="password" name="password" minLength={6} maxLength={12} required />
                <Link to="/ResetPassword">
                    <p id={styles.forgotPassword}>ESQUECEU A SENHA?</p>
                </Link>
                <button type="submit">ENTRAR</button>
                {error && (
                    error
                )}
            </form>
            <div>
                <h1>NOVO AQUI?</h1>
                <Link to={"/Cadastro"}>
                    <h1>CADASTRE-SE</h1>
                </Link>
            </div>
            <div className={styles.delete} onClick={resetdb}>
                <i className='bx bxl-typescript'></i>
            </div>
        </div>
    )
}
