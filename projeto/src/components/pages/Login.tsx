import { useState } from "react"
import styles from "./Login.module.css"
import { Link, useLocation } from "react-router-dom"


export const Login = () => {

    const [usuario, setUsuario] = useState<object>({})

   let location = useLocation()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsuario({...usuario, [e.target.name]: e.target.value })
    }

    return (
        <div className={styles.main}>
           
                <form className={styles.formContainer}>
                    <h1>SIGN IN</h1>
                    <p> COMECE A APROVEITAR OS BENEFÍCIOS HOJE MESMO!</p>
                    <label htmlFor="user">USUÁRIO</label>
                    <input type="text" id="user" maxLength={25} onChange={handleChange} required/>
                    <label htmlFor="user">SENHA</label>
                    <input type="password" id="password" maxLength={25} onChange={handleChange} required/>
                    <Link to="/ResetPassword">
                        <p id={styles.forgotPassword}>ESQUECEU A SENHA?</p>
                    </Link>
                    <button type="submit">ENTRAR</button>
                </form>
                <div>
                    <h1>NOVO AQUI?</h1>
                    <Link to={"/Cadastro"}>
                        <h1>CADASTRE-SE</h1>
                    </Link>
                </div>
        </div>
    )
}
