'use client';
import React, { useState, useEffect } from "react";
import "./registro.css";

interface Denuncia {
  DENUNCIA: string;
}

const Page = () => {
  const [denuncias, setDenuncias] = useState<Denuncia[]>([]);
  const [mostrarDenuncias, setMostrarDenuncias] = useState(false);

  useEffect(() => {
    if (mostrarDenuncias) {
      carregarDenuncias();
    }
  }, [mostrarDenuncias]);

  const carregarDenuncias = async () => {
    try {
      const response = await fetch("http://localhost:8080/denuncia/all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setDenuncias(data);
      } else {
        console.error("Erro ao carregar denúncias:", response.statusText);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Erro ao carregar denúncias:", error.message);
      } else {
        console.error("Erro desconhecido ao carregar denúncias");
      }
    }
  };

  const handleMostrarDenuncias = async () => {
    setMostrarDenuncias(true);
    await carregarDenuncias();
    console.log("Botão 'Exibir Denúncias' clicado");
  };

  return (
    <div className="denuncia-page">
      <div className="denuncia-container">
        <h2 className="denuncia-title">Denúncias realizadas:</h2>
        {!mostrarDenuncias && (
          <button onClick={handleMostrarDenuncias} className="denuncia-button">Exibir Denúncias</button>
        )}
        {mostrarDenuncias && (
          <div className="denuncia-list-wrapper">
            <ul className="denuncia-list">
              {denuncias.map((denuncia, index) => (
                <li className="denuncia-item" key={index}>
                  <p>Denúncia: {denuncia.DENUNCIA}</p>
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
