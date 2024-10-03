import styles from "./Login.module.css"
import { useEffect, useState } from "react"
import { Link, useNavigate, useOutletContext } from "react-router-dom"
import axios from "axios";
import Alert from '@mui/material/Alert';
import { severity } from "../../types/severity";
import TextField from '@mui/material/TextField';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';




export const Login = () => {

    const [usuario, setUsuario] = useState([])
    const [message, setMessage] = useState("")
    const [messageType, setmessageType] = useState<severity>("success")
    const navigate = useNavigate()
    const context: any = useOutletContext()
    const [open, setOpen] = useState(false)

    const longText = 'Esse site é uma demonstração sem fins lucrativos, portanto utiliza um servidor gratuito para funcionar. Caso as credenciais de login estejam realmente corretas e ainda assim haja problemas para acessar, por gentileza aguarde 30 segundos para que o servidor ligue e se conecte automaticamente.'

    const jsonServer = axios.create({
        baseURL: 'https://luminy.glitch.me/user'
    })
    

    useEffect((() => {
        jsonServer.get('').then(resp => setUsuario(resp.data)).catch(err => console.log(err))
    }), [])


    const handleSubmit = (e: any) => {
        e.preventDefault()
        let data = new FormData(e.target)
        let value = Object.fromEntries(data.entries())
        for (let index of usuario) {
            if (index.user === data.get("user") && index.password == data.get("password")) {
                jsonServer.get(`${index.id}`).then(resp => context.setUser(resp.data)).catch(err => console.log(err))
                setmessageType("success")
                setMessage("Logado com sucesso")
                return setTimeout(() => {
                    navigate(`/Dashboard/${data.get("user")}`, { replace: true })
                }, 2500);
            }
        }
        setmessageType("error")
        setMessage("Usuário não cadastrado")
    }

    const resetdb = () => {
        for (let user of usuario) {
            jsonServer.delete(`/${user.id}`).catch(err => console.log(err))
        }
    }

    return (
        <div className={styles.main}>
            {(message && open) && (
                <Alert onClose={() => {setOpen(false)}} className={styles.message} severity={messageType}>{message}</Alert>
            )}

            <Tooltip title={longText} placement="right" arrow>
                <h1 className={styles.tooltip}>?</h1>
            </Tooltip>
            <h1 className={styles.title}><span className={styles.underline}>FAZER</span> LOGIN</h1>
            <form className={styles.formContainer} onSubmit={handleSubmit} >
                <TextField className={styles.textFild} type='text' sx={{
                    // Root class for the input field
                    "& .MuiOutlinedInput-root": {
                        color: "#E0FEAC",
                        // Class for the border around the input field
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#E0FEAC",
                            borderWidth: "2px",
                        },
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                        color: "#E0FEAC",
                    },
                }} inputProps={{ maxLength: 25 }} required id="user" name="user" label="Nome de usuário" variant="outlined" />
                <TextField type='Password' sx={{
                    // Root class for the input field
                    "& .MuiOutlinedInput-root": {
                        color: "#E0FEAC",
                        // Class for the border around the input field
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#E0FEAC",
                            borderWidth: "2px",
                        },
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                        color: "#E0FEAC",
                    },
                }} inputProps={{ maxLength: 25 }} id="password" name="password" label="Senha" required variant="outlined" />
                <button type="submit" onClick={()=> setOpen(true)} ><i className='bx bx-log-in' ></i>ENTRAR</button>
            </form>
            <div className={styles.line}></div>
            <div className={styles.lowerDiv}>
                <h1>NÃO É REGISTRAD<span onClick={resetdb}>O</span>?</h1>
                <Link to={"/Registrar"}>
                    <div className={styles.loginButton}>Registrar</div>
                </Link>
            </div>
        </div>
    )
}
