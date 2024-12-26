'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";


export interface Funcionario {
  id: string;
  nome: string;
  idade: number;
  cargo: string;
  email: string;
}

export default function Home() {

  
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([])
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [idade, setIdade] = useState(0)
  const [email, setEmail] = useState("")
  useEffect(() => {
    const getData = async() => {
      const response = await axios.get("http://localhost:3001/funcionarios")
      const data = response.data;
      setFuncionarios(data);
      
    }

    getData();
  }, [])

 const handleSubmit = async(e: React.FormEvent) => {
  e.preventDefault();

  const novoFuncionario: Omit<Funcionario, 'id'> = {
    nome,
    cargo, 
    idade,
    email
  }

  const response = await axios.post("http://localhost:3001/funcionarios", novoFuncionario)
  const funcionarioAdicionado = response.data;

  setFuncionarios((prev) => [...prev, funcionarioAdicionado]);

  setNome("");
  setCargo("");
  setIdade(0);
  setEmail("");
 }
  return (
    <div>
         <h1>Hello World!!</h1>
         <ul>
              {funcionarios.map((func) => (
                <li key={func.id}>
                  <span>{func.nome}</span>
                  <span>{func.cargo}</span>
                  <span>{func.idade}</span>
                  <span>{func.email}</span>
                </li>
              ))}
         </ul>
         <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">Nome:</label>
              <input 
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)} 
                />
            </div>

            <div>
              <label htmlFor="">Cargo:</label>
              <input 
                type="text"
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}  
                />
            </div>

            <div>
              <label htmlFor="">Idade:</label>
              <input 
                type="number"
                value={idade}
                onChange={(e) => setIdade(Number(e.target.value))}  
                />
            </div>

            <div>
              <label htmlFor="">E-mail:</label>
              <input 
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}  
                />
            </div>
            <button type="submit">Adicionar</button>
         </form>
    </div>
   
  );
}
