import { ReactElement, useState } from "react"
import styles from "./Login.module.css"
import { Link } from "react-router-dom"



export const Login = () => {

    const [usuario, setUsuario] = useState<object>([])
    const [error, setError] = useState<string>()

    console.log(usuario)

    const handleSubmit = (e: any): any => {
        e.preventDefault()
        let data = new FormData(e.target)
        let value = Object.fromEntries(data.entries())
        
        if (Object.values(usuario).indexOf(value) !== undefined) {
            setError("Usuário já cadastrado")
        } else {
            fetch("https://boatneck-mulberry-chime.glitch.me/user", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(value)
            })
            .then(resp => resp.json())
            .catch(err => console.log(err))
        }

    }

    const resetdb = (): any => {
        fetch(`https://boatneck-mulberry-chime.glitch.me/user/1`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(resp => resp.json())
            .catch(err => console.log(err))
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
