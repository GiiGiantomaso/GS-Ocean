"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./denuncia.css";

const DenunciaPage = () => {
  const [denuncia, setDenuncia] = useState("");
  const [envioSucesso, setEnvioSucesso] = useState(false);

  const handleDenunciaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDenuncia(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/denuncia", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ DENUNCIA: denuncia.toLowerCase() }),
      });

      if (response.ok) {
        console.log("Denúncia enviada com sucesso!");
        setEnvioSucesso(true);
        setDenuncia("");
      } else {
        console.error("Erro ao enviar denúncia:", response.statusText);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Erro ao enviar denúncia:", error.message);
      } else {
        console.error("Erro desconhecido ao enviar denúncia");
      }
    }
  };

  return (
    <div className="denuncia-page">
      <div className="denuncia-container">
        <div className="denuncia-form-wrapper">
          <h2>Caso veja uma prática ilegal</h2>
          <h2>DENUNCIE:</h2>
          <form onSubmit={handleSubmit}>
            <textarea
              value={denuncia}
              onChange={handleDenunciaChange}
              placeholder="Descreva sua denúncia..."
              className="denuncia-textarea"
            />
            <button type="submit" className="denuncia-button">Enviar</button>
          </form>
          {envioSucesso && <p className="success-message">Denúncia enviada com sucesso!</p>}
        </div>
        <div className="denuncia-image-wrapper">
          <Image
            src="/megafone.png"
            alt="Imagem de Denúncia"
            className="denuncia-image"
            width={400}
            height={300} 
          />
        </div>
      </div>
    </div>
  );
};

export default DenunciaPage;
