import React from 'react';
import logo from '../../assets/Images/Logo.png';
import './Menu.css';
import Button from '../Button/index';

export default function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={logo} alt="logo" />
      </a>
      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}
