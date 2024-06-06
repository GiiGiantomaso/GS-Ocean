import Image from "next/image";
import React from "react";
export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="title">
          <h1>VAMOS SALVAR<span> OS NOSSOS<br /> OCEANOS </span></h1>
        </div>
      </section>
      <section className="ocean-importance">
        <div className="section-text">
          <h2>A Importância dos Oceanos</h2>
          <p>Os oceanos representam a força motriz essencial do nosso planeta, ocupando 70% superfície terrestre e hospedando uma vasta biodiversidade impressionante. Eles exercem um controle significativo sobre o clima, geram mais da metade do oxigênio que consumimos e desempenham um papel fundamental na oferta de alimentos e recursos econômicos.</p>
          
            <li>Os oceanos são vitais para a vida na Terra, atuando como colunas verticais cruciais e controlando o clima global, além de serem fundamentais para a produção de oxigênio e abrigarem uma rica biodiversidade marinha. Esses ambientes aquáticos são essenciais para a conservação da biodiversidade global e têm um grande impacto econômico, fornecendo recursos como alimentos, energia, minerais e oportunidades para o turismo e o comércio marítimo. Além disso, os oceanos desempenham um papel crucial na captura de dióxido de carbono, contribuindo para a estabilidade climática e mitigando os efeitos das alterações climáticas, tornando a sua proteção essencial para a saúde dos ecossistemas marinhos, o bem-estar do planeta e o futuro das gerações futuras.</li>
        
          
        </div>
      </section>
    </main>
  );
}