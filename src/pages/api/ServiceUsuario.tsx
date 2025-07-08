
export function getUsuarios() {

    return fetch("http://localhost:8080/usuario/list", {
        method: "GET",
        headers: {
            "Content-Type":"application/json" //informando q o conteudo é do tipo do JSON
        }
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        return data; // retorna o array para quem chamou usar
    })
    .catch(error => {
      console.log(error);
      throw error; // relança o erro para quem chamou tratar
    });

    }

type UsuarioAtualizado = {
    id: number,
    username: string,
    email: string,
    password: string,
    telefone?: string,
    imagemPath?: string,
}

function updateUsuariosID(id: number, usuarioAtualizado: UsuarioAtualizado) {
    
    return fetch(`http://localhost:8080/usuario/${id}`, {
       method: "PATCH",
       headers: {
        "Content-Type": "application/json"
       },
       body: JSON.stringify(usuarioAtualizado)
    })
    .then(resp => {
        if(!resp.ok) {
            throw new Error(`Erro na requisição: ${resp.status}`
        )}
        return resp.json()
    })
        
    .then(data => {
        console.log("Usuario atualizado",data);
        return data;
    })
    .catch(error => {
        console.log("Erro ao atualizar usuário", error);
    })

}