'use client';
import React, { useState, useEffect } from "react";
import "./registro.css";

interface Avaliacao {
  AVALIACAO: number;
  TEXTO: string;
}

const Page = () => {
  const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([]);
  const [envioSucesso, setEnvioSucesso] = useState(false);
  const [mostrarAvaliacoes, setMostrarAvaliacoes] = useState(false);

  useEffect(() => {
    if (mostrarAvaliacoes) {
      carregarAvaliacoes();
    }
  }, [mostrarAvaliacoes]);

  const carregarAvaliacoes = async () => {
    try {
      const response = await fetch("http://localhost:8080/avaliacao", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setAvaliacoes(data);
      } else {
        console.error("Erro ao carregar avaliações:", response.statusText);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Erro ao carregar avaliações:", error.message);
      } else {
        console.error("Erro desconhecido ao carregar avaliações");
      }
    }
  };

  const handleMostrarAvaliacoes = async () => {
    setMostrarAvaliacoes(true);
    await carregarAvaliacoes();
    console.log("Botão 'Exibir Avaliações' clicado");
  };

  return (
    <div className="avaliacao-page">
      <div className="avaliacao-container">
        <h2 className="avaliacao-title">Avaliações realizadas:</h2>
        {!mostrarAvaliacoes && (
          <button onClick={handleMostrarAvaliacoes} className="avaliacao-button">Exibir Avaliações</button>
        )}
        {mostrarAvaliacoes && (
          <div className="avaliacao-list-wrapper">
            <ul className="avaliacao-list">
              {avaliacoes.map((avaliacao, index) => (
                <li className="avaliacao-item" key={index}>
                  <p>NOTA: {avaliacao.AVALIACAO}</p>
                  <p>FEEDBACK: {avaliacao.TEXTO}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
