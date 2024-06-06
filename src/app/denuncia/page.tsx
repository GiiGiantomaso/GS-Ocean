'use client';

import React, { useState } from "react";
import Image from "next/image";
import "./denuncia.css";

export default function DenunciaPage() {
  const [denuncia, setDenuncia] = useState("");

  const handleDenunciaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDenuncia(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Denúncia enviada:", denuncia);
    setDenuncia("");
  };

  return (
    <div className="denuncia-page">
      <div className="denuncia-container">
        <div className="denuncia-form-wrapper">
          <h2>Denuncie</h2>
          <form onSubmit={handleSubmit}>
            <textarea
              value={denuncia}
              onChange={handleDenunciaChange}
              placeholder="Descreva sua denúncia..."
              className="denuncia-textarea"
            />
            <button type="submit" className="denuncia-button">Enviar</button>
          </form>
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
}
