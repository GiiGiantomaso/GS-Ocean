import React from "react";
import Image from "next/image";

const Saiba = () => {
  return (
    <>
      <section className="ocean-challenges">
        <div className="images-container">
          <div className="section-image">
            <Image src="/imagem2.jpg" alt="ocean drawing" width={400} height={350}></Image>
          </div>
          <div> <p>  . </p></div>
          <div className="section-image">
            <Image src="/imagem3.jpg" alt="ocean drawing" width={400} height={350}></Image>
          </div>
        </div>
        <div className="section-text">
          <h2>Estamos Poluindo Nossos Oceanos</h2>
          <p>A poluição dos oceanos é uma grave ameaça à vida marinha, aos habitats oceânicos e à saúde humana. Poluentes como mercúrio, antibióticos, petróleo e gases de efeito estufa causam danos significativos.</p>
          <ul>
            <li><span>Poluição por plásticos e lixo:</span> Plástico decompiência libera tóxicos produtos na água, contaminando os habitats dos animais marinhos. A maioria de animais, como tartarugas, aves marinhas e peixes, confundem plástico com comida e ingerem-no, causando danos internos, fome e até morte. A poluição plástica nos oceanos prejudica os ecossemas marinhos e tem um impacto negativo na saúde humana, pois plástico pode entrar na cadeia alimentar e chegar aos usuários nos causando serios problemas.</li>
            <li><span>Poluição por mercúrio:</span> O mercúrio se acumula nos peixes e pode afetar a saúde humana já que ingerimos o. Antibióticos e outros medicamentos levam ao surgimento de bactérias resistentes e impactam a vida marinha.</li>
            <li><span>Poluição por petróleo:</span> Derramamentos de petróleo destroem habitat. Tudo isso afeta a saúde dos organismos marinhos e criando zonas mortas onde a vida não pode prosperar.</li>
          </ul>
        </div>
      </section>

      <section className="make-difference">
        <div className="section-text">
          <h2>Pesca inadequada:</h2>
          <p>A pesca inadequada, especialmente a pesca excessiva, é extremamente prejudicial aos oceanos, podendo ser mais devastadora que a poluição, a degradação e a acidificação.</p>
          <div>
            <li>Ela reduz drasticamente as populações de peixes, ameaça a extinção de espécies e desequilibra os ecossistemas marinhos.</li>
            <li>Afeta negativamente as comunidades costeiras que dependem da pesca, destrói habitats marinhos importantes.</li>
            <li>Precisamos urgente praticar a pesca sustentável e seguir as regulamentações rigorosas para proteger a biodiversidade e a saúde dos oceanos.</li>
            <li>Precisamos Salvar nossos oceanos, isso requer esforços globais para reduzir a poluição, adotar práticas de pesca sustentável, proteger habitats marinhos, e combater as mudanças climáticas. A saúde dos oceanos é vital para a nossa sobrevivência e bem-estar, e ações imediatas são necessárias para garantir que eles continuem a sustentar a vida no planeta.</li>
            <li><span>Seja um colaborador da causa:</span> Participe de atividades como a limpeza de praias, programas voltados para a proteção da vida marinha e outras iniciativas destinadas a conservar os oceanos.</li>
          </div>
        </div>
        
        <div className="images-container">
          <div className="section-image">
            <Image src="/imagem4.jpg" alt="ocean drawing" width={400} height={350} />
          </div>
          <div> <p> . </p></div>
          <div className="section-image">
            <Image src="/imagem5.jpg" alt="ocean drawing" width={400} height={350} />
          </div>
        </div>
      </section>

    </>
  )
};

export default Saiba;
