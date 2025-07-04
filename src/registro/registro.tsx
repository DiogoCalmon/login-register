import { useState } from 'react'
import './registro.css'

import Input from "../components/input";
import Botao from "../components/botao"

function App() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  // const [count, setCount] = useState(0)
  async function handSubmit(event : React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    const form = {
      tipo: "registro",
      login: login,
      senha: senha,
      confirmarSenha: confirmarSenha
    };

    const resposta = await fetch("http://localhost:3000/login-registro/src/controllers/api_registro.php", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(form)
    })

    const dados = await resposta.json();
    alert(JSON.stringify(dados, null, 2));
  }

  return (
    <>
      <div className='flex justify-center h-screen items-center bg-zinc-900'>
        <form onSubmit={(event) => handSubmit(event)} action="" method="post" className=' w-2xl rounded-2xl p-8 flex flex-col items-center gap-2'>
          <h1 className='text-zinc-200 text-2xl font-bold'>Registro</h1>
          <Input id={"login"} onChange={setLogin} placeholder='Login' type='text'/>
          <Input id={"senha"} onChange={setSenha} placeholder='Senha' type='password'/>
          <Input id={"confirmarSenha"} onChange={setConfirmarSenha} placeholder='Confirmar senha' type='password'/>
          <Botao />
        </form>
      </div>
    </>
  )
}

export default App
