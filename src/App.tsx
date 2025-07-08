import Login from "./pages/auth/login/index"
import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Perfil from "./pages/perfil"
import AtualizarSenha from "./pages/auth/atualizar-acesso"
import { Home } from "./pages/BoasVindas/Home/Home"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/profile" element={<Perfil />}/>
      <Route path="/change-password" element={<AtualizarSenha />}/>
      <Route path="/home" element={<Home />}/>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
