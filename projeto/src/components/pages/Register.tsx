import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import styles from "./Register.module.css"
import axios from "axios";
import Alert from '@mui/material/Alert';
import { severity } from "../../types/severity";
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

export const Register = () => {

    const [usuario, setUsuario] = useState([])
    const [message, setMessage] = useState("")
    const [open, setOpen] = useState(false)
    const [messageType, setmessageType] = useState<severity>("success")
    const navigate = useNavigate()
    const id = uuidv4()

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
        let value: any = Object.fromEntries(data.entries())
        value.id = id
        value.bisa = []
        value.fastercard = []

        for (let index of usuario) {
            if (index.user === data.get("user")) {
                setmessageType("error")
                return setMessage("Usuário já cadastrado")
            }
        }

        jsonServer.post('', value).then((resp) => {setMessage("Cadastrado com sucesso!");setUsuario(resp.data)})

        if (usuario.length >= 1) {
            var deletID = usuario[0].id
            jsonServer.delete(`/${deletID}`).then(resp => setUsuario(resp.data)).catch(err => console.log(err))
        }

        return setTimeout(() => {
            navigate("/Login")
        }, 3500)
    }
    

    return (
        <div className={styles.main}>
            <Link to={"/"}>
                <i className='bx bx-left-arrow-alt' id={styles.goBack}></i>
            </Link>
            {(message && open) && (
                <Alert onClose={() => {setOpen(false)}} className={styles.message} severity={messageType}>{message}</Alert>
            )}

            <Tooltip title={longText} placement="right" arrow>
                <h1 className={styles.tooltip}>?</h1>
            </Tooltip>
            <h1 className={styles.title}><span className={styles.underline}>FAZER</span> REGISTRO</h1>
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
                <button type="submit" onClick={()=> setOpen(true)} ><i className='bx bx-log-in' ></i>REGISTRAR</button>
            </form>
            <div className={styles.line}></div>
            <div className={styles.lowerDiv}>
                <h1>JÁ É REGISTRADO?</h1>
                <Link to={"/Login"}>
                    <div className={styles.loginButton}>Logar</div>
                </Link>
            </div>
        </div>
    )
}

