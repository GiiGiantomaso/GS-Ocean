"use client"
import React from "react";
import { useState } from "react";

const Cadastro = () => {
  const [mostrarAviso, setMostrarAviso] = useState(false);
  const [mensagem, setMensagem] = useState<string>("");

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");


  const changeNome = (event: any) => {
    setNome(event.target.value);
  };
  const changeUser = (event: any) => {
    setTelefone(event.target.value);
  };
  const changeEmail = (event: any) => {
    setEmail(event.target.value);
  };

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const enviarDados = async (event: any) => {

    const dados = {
      nome,
      telefone,
      email,
    };
    console.log(JSON.stringify(dados))

    try {
      const response = await fetch("http://localhost:8080/cliente", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(dados),
      });

      if (response.statusText === "Created") {
        setMostrarAviso(true);
        setMensagem("Usuário cadastrado");
      } else {
        setMostrarAviso(true);
        setMensagem("Ocorreu um erro");
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      setMostrarAviso(true);
      setMensagem("Falha na conexão");
    }
  };

  const fechar = () => {
    setMostrarAviso(false);
  };

  return (
    <section className="signup">
      {mostrarAviso && (
        <div className="alert-container">
          <div className="alert">
            <span onClick={fechar} className="close-btn">
              &times;
            </span>
            <p>{mensagem}</p>
          </div>
        </div>
      )}
      <form className="form">
        <h4>Seja um apoiador da causa!</h4>
        <h2>Se cadastre</h2>

        <input value={nome} onChange={changeNome} type="text" placeholder="Nome completo" required />
        <input value={telefone} onChange={changeUser} type="text" placeholder="Telefone" required />
        <input value={email} onChange={changeEmail} type="email" placeholder="E-mail" required />
        
        <button type="submit" onClick={enviarDados}>Cadastrar</button>
      </form>
    </section>
  );
};

export default Cadastro;
