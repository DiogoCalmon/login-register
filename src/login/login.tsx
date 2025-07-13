import { useState } from "react";
import Input from "../components/input"
import Botao from "../components/botao";
import { Link } from "react-router";

export default function login(){
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");

    const handleChange = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = {
            tipo: "login",
            login: login,
            senha: senha
          };

        const resposta = await fetch("http://localhost:3000/login-registro/src/controllers/api_login.php", {
          method: "POST",
          headers: {
              "content-type": "application/json"
          },
          body: JSON.stringify(form)
        })
        const data = await resposta.json()
        alert(JSON.stringify(data, null, 2));
        
    }
    return (
    <>     
      <div className='flex h-screen flex-col justify-center items-center bg-zinc-900'>
        <form onSubmit={(event) => handleChange(event)} action="" method="post" className=' w-2xl rounded-2xl p-8 flex flex-col items-center gap-2'>
          <h1 className='text-zinc-200 text-2xl font-bold'>Login</h1>
          <Input id={"login"} onChange={setLogin} placeholder='Login' type='text'/>
          <Input id={"senha"} onChange={setSenha} placeholder='Senha' type='password'/>
          <Botao />
        </form>
        <Link to="/registro" className="text-blue-600">Não tem conta? Cadastre-se</Link>
      </div>
    </>
    )
}