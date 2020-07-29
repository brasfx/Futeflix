import React from 'react';
import { FooterBase } from './styles';

export default function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/" target="blank">
        <img
          src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg"
          alt="Logo Alura"
        />
      </a>
      <p>
        Criado por Davi Ribeiro© durante a <br />
        <a href="https://www.alura.com.br/" target="blank">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}
