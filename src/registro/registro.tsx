import { useState } from 'react'
import './registro.css'

function App() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  // const [count, setCount] = useState(0)
  async function handSubmit(event : React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    const form = {
      login: login,
      senha: senha
    };

    const resposta = await fetch("http://127.0.0.1:3000/teste.php", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({teste: "dados"})
    })

    const dados = await resposta.json();
    console.log("Dados recebidos:", dados);
    alert(JSON.stringify(dados, null, 2));
  }

  return (
    <>
      <div className='flex justify-center h-screen items-center bg-zinc-900'>
        <form onSubmit={(event) => handSubmit(event)} action="" method="post" className=' w-2xl rounded-2xl p-8 flex flex-col items-center gap-2'>
          <h1 className='text-zinc-200 text-2xl font-bold'>Registro</h1>
          <input id='login' onChange={(e) => setLogin(e.target.value)} placeholder='login' type="text" className='bg-zinc-700 rounded text-center text-neutral-50 w-90' />
          <input id='senha' onChange={(e) => setSenha(e.target.value)} placeholder='senha' type="password" className='bg-zinc-700 rounded text-center text-neutral-50 w-90' />
          <button className='bg-blue-700 rounded text-neutral-100 w-90' type='submit'>Enviar</button>
        </form>
      </div>
    </>
  )
}

export default App
