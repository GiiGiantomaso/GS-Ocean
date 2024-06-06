'use client';
import React from "react";
import "./avaliacao.css"; 

const Avaliacao = () => {
  const [nota, setNota] = React.useState<number | null>(null);
  const [feedback, setFeedback] = React.useState<string>("");
  const initialNota = null;
  const initialFeedback = "";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (nota !== null && feedback.trim() !== "") {
      const response = await fetch("/api/avaliacao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nota, feedback }),
      });
      if (response.ok) {
        // Limpa o formulário depois do envio
        setNota(initialNota);
        setFeedback(initialFeedback);
      }
    }
  };

  return (
    <div className="avaliacao-container">
      <h2 className="avaliacao-title">Avaliação do Site</h2>
      <form onSubmit={handleSubmit} className="avaliacao-form">
        <div className="avaliacao-rating">
          <label>Avalie sua experiência conosco:</label>
          <select
            value={nota ?? ""}
            onChange={(e) => setNota(Number(e.target.value))}
            required
          >
            <option value="">Selecione uma nota</option>
            {[1, 2, 3, 4, 5].map((nota) => (
              <option key={nota} value={nota}>
                {nota}
              </option>
            ))}
          </select>
        </div>

        <div className="feedback-input">
          <label>Feedback:</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Deixe seu feedback aqui..."
            required
          />
        </div>

        <button type="submit" className="avaliacao-button">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Avaliacao;
