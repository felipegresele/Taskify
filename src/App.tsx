import Login from "./pages/auth/login/index"
import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Perfil from "./pages/perfil"
import AtualizarSenha from "./pages/auth/atualizar-acesso"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/profile" element={<Perfil />}/>
      <Route path="change-password" element={<AtualizarSenha />}/>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
