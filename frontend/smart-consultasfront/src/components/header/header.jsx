import React from 'react';
import './public/header'; // Estilos para o cabeçalho (opcional)

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Substitua pelo seu logo */}
        <img src="#" alt="Logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/clients">Clientes</a></li>
          <li><a href="/about">Sobre</a></li>
          <li><a href="/contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
