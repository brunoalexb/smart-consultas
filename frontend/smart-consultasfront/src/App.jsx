import { useState } from 'react'
import './App.css'
import ClientForm from './components/ClientForm';

function App() {

  return (
    <>
      <h1>Cadastro de Clientes</h1>
      <div className="card">
        <Header />
        <ClientForm /> {/* Inclui seu componente ClientForm */}
      </div>
    </>
  )
}

export default App
