import React from "react";
import "./footerStyles.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerColumn">
        <div className="footerContent">
          Giovanna Lima Giantomaso<br />
          RM: 553369 - Turma: 1TDSPC
        </div>
      </div>
      <div className="footerColumn">
        <div className="footerContent">
        Paulo Sergio Caetano Moreno Mafra<br />
          RM: 84059 - Turma: 1TDSZ
        </div>
      </div>
      <div className="footerColumn">
        <div className="footerContent">
          Rebeca Silva Lopes<br />
          RM: 553764 - Turma: 1TDSPC
        </div>
      </div>
    </div>
  );
};

export default Footer;
