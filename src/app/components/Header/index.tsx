import React from "react";
import "./header.css"
import Image from "next/image";

const Header = () => {
  return (
    <header>
        <nav className="navbar">
            <a href="/">
                <Image src="/tartaruga-marinha.png" alt="onda" width={45} height={55}></Image>
            </a>
            <ul className="pages">
              <li>
                <a className="page-link" href="./denuncia">Faça uma denúncia</a>
              </li>
              <li>
                <a className="page-link" href="./Saiba">Saiba mais</a>
              </li>
              <li>
                <a className="page-link" href="./contato">Contato</a>
              </li>
              <li>
                <a className="page-link" href="/cadastro">Cadastro</a>
              </li>
              <li>
                <a className="page-link" href="./avaliacao">Avaliação</a>
              </li>
              
            </ul>
            <a href="./cadastro">
                <Image src="/user.svg" alt="cadastro" width={45} height={50}></Image>
            </a>
        </nav>
    </header>
  )
};

export default Header;
