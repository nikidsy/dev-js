import './App.css'
import {useState} from "react";
import axios from "axios";
// import { Header } from "./components/header/index.jsx";
// import {Main} from "./components/main/index.jsx";

function App() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [usuario, setUsuario] = useState(null)

    const login = async () => {

        try {
            const resposta = await axios.post("http://localhost:3000/login", {email, senha})
            const token = resposta.data.token;

            localStorage.setItem("token", token)
            alert("login realizado")
        } catch {
            alert("Login invalido")
        }
    }

    const buscar = async () => {
        const token = localStorage.getItem("token")
        const resposta = await axios.get("http://localhost:3000/perfil", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setUsuario(resposta.data.usuario)
    }

  return (
    <>
        <h2>Login</h2>
        <input type="email" placeholder="informe seu e-mail" value={email} onChange={
            (e) => setEmail(e.target.value)} />
        <input type="password" placeholder="informe sua senha" value={senha} onChange={
            (e) => setSenha(e.target.value)} />

        <button onClick={login}>Entrar</button>
    </>
  )
}

export default App
