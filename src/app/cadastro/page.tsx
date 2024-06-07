"use client"
import React, { useState } from "react";

const Cadastro = () => {
  const [mostrarAviso, setMostrarAviso] = useState(false);
  const [mensagem, setMensagem] = useState<string>("");

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  const changeNome = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };
  const changeTelefone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTelefone(event.target.value);
  };
  const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const enviarDados = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const dados = {
      NOME_USUARIO: nome,
      EMAIL_USUARIO: email,
      TELEFONE: telefone,
    };

    console.log(JSON.stringify(dados));

    try {
      const response = await fetch("http://localhost:8080/usuario", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(dados),
      });

      if (response.status === 201) {
        setMostrarAviso(true);
        setMensagem("Usuário cadastrado");

        // Limpar os campos do formulário
        setNome("");
        setTelefone("");
        setEmail("");
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
      <form className="form" onSubmit={enviarDados}>
        <h4>Seja um apoiador da causa!</h4>
        <h2>Se cadastre</h2>

        <input
          value={nome}
          onChange={changeNome}
          type="text"
          placeholder="Nome completo"
          required
        />
        <input
          value={telefone}
          onChange={changeTelefone}
          type="text"
          placeholder="Telefone"
          required
        />
        <input
          value={email}
          onChange={changeEmail}
          type="email"
          placeholder="E-mail"
          required
        />

        <button type="submit">Cadastrar</button>
      </form>
    </section>
  );
};

export default Cadastro;
