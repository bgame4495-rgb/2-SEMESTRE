import { useState } from 'react'
import './App.css'
import Mensagem from './components/Mensagem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Bem vindo ao meu projeto</h1>

      <Mensagem />
      <Infoaluno/>
      <hr />
      <Infocurso/>
    </>
  )
}

export default App
