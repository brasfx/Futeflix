import React from 'react';
import { FooterBase, FooterDiv } from './styles';
import FooterLogo from '../../assets/Images/Footer.png';

export default function Footer() {
  return (
    <FooterBase>
      <FooterDiv>
        <img
          src={FooterLogo}
          alt="Logo Davi"
          style={{ height: '150px', alignItems: 'right' }}
        />
        <a href="https://www.alura.com.br/" target="blank">
          <img
            src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg"
            alt="Logo Alura"
          />
        </a>
      </FooterDiv>

      <p>
        Criado por Davi Ribeiro© durante a <br />
        <a href="https://www.alura.com.br/" target="blank">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}
