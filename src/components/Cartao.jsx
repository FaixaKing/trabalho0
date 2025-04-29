import React from "react";
import './Cartao.css';

function Cartao() {
  return (
    <>
      <header>
        <h1>Malware</h1>
      </header>

      <h2>O que é Malware</h2>
      <p>
        Malware é um tipo de programa criado com o objetivo de causar danos, roubar informações,
        espionar ou assumir o controle de dispositivos, como computadores, celulares e tablets.
        Ele pode se disfarçar de programas legítimos ou se instalar sem o conhecimento do usuário.
      </p>

      <h2>Dicas Malware</h2>
      <ul>
        <li><strong>Mantenha o sistema e os programas atualizados</strong>: Atualizações corrigem falhas de segurança que podem ser exploradas por malwares.</li>
        <li><strong>Use um antivírus confiável</strong>: Tenha um bom software de segurança instalado e sempre ativo.</li>
        <li><strong>Não clique em pop-ups suspeitos</strong>: Feche essas janelas imediatamente, sem interagir com elas.</li>
      </ul>
    </>
  );
}

export default Cartao;
