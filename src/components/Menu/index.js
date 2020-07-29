import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Images/Logo.png';
import './Menu.css';
import Button from '../Button/index';

export default function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={logo} alt="logo" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}
