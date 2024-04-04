import styles from "./Login.module.css"
import { Link } from "react-router-dom"

export const Login = (props) => {

    const {state} = this.props.location

    const handleSubmit = () => {
        
    }

    return (
        <div className={styles.main}>
                <form className={styles.formContainer} onSubmit={handleSubmit}>
                    <h1>SIGN IN</h1>
                    <p> COMECE A APROVEITAR OS BENEFÍCIOS HOJE MESMO!</p>
                    <label htmlFor="user">USUÁRIO</label>
                    <input type="text" id="user" maxLength={25} required/>
                    <label htmlFor="user">SENHA</label>
                    <input type="password" id="password" maxLength={25} required/>
                    <Link to="/resetPassword">
                        <p id={styles.forgotPassword}>ESQUECEU A SENHA?</p>
                    </Link>
                    <button type="submit">ENTRAR</button>
                </form>
                <div>
                    <h1>NOVO AQUI?</h1>
                    <Link to={"/cadastro"}>
                        <h1>CADASTRE-SE</h1>
                    </Link>
                </div>
        </div>
    )
}