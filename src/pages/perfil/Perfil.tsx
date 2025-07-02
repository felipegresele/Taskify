import { Link } from "react-router-dom";

export function Perfil() {
    return (
        <div>
            <h1>Perfil</h1>
            <div>
                <p>Nome:</p>
                <p>Email:</p>
                <p>Senha:</p>
                <Link to="change-password">Alterar Senha</Link>
            </div>
            <div>
                <h3>Adicionar Foto</h3>
            </div>
        </div>
    )
}