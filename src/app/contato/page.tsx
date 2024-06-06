import React from 'react';
import './styles.css';

const EnvelopeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M21.734 8.293c-.133-.086-5.734-3.707-9.734-3.707s-9.602 3.621-9.734 3.707c-.158.102-.266.262-.266.441v10c0 .276.224.5.5.5h18c.276 0 .5-.224.5-.5v-10c0-.179-.108-.339-.266-.441zm-1.734 9.707h-16v-9.666l7.781 5.033c.105.068.226.101.344.101s.238-.033.344-.101l7.781-5.033v9.666zm-9-5.707l-7-4.5v-1.793l7 4.5 7-4.5v1.793l-7 4.5z"/>
  </svg>
);

const Contato = () => {
  return (
    <table className="table">
      <tbody>
        <tr className="table-header">
          <td className="table-cell">Nome</td>
          <td className="table-cell">Email Institucional</td>
          <td className="table-cell">RM</td>
        </tr>
        <tr className="table-row">
          <td className="table-cell">Giovanna Lima</td>
          <td className="table-cell">
            <div className="icon-container">
              <EnvelopeIcon />
              <span>rm553369@fiap.com.br</span>
            </div>
          </td>
          <td className="table-cell">553369</td>
        </tr>
        <tr className="table-row">
          <td className="table-cell">Rebeca Lopes</td>
          <td className="table-cell">
            <div className="icon-container">
              <EnvelopeIcon />
              <span>rm553764@fiap.com.br</span>
            </div>
          </td>
          <td className="table-cell">553764</td>
        </tr>
        <tr className="table-row">
          <td className="table-cell">Paulo Sergio</td>
          <td className="table-cell">
            <div className="icon-container">
              <EnvelopeIcon />
              <span>rm84059@fiap.com.br</span>
            </div>
          </td>
          <td className="table-cell">84059</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Contato;
