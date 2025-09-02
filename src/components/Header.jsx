import React from 'react';
import carrinhoBranco from '../assets/carrinhoDeCompras.png';

export default function Header({ abrirCarrinho, itensCarrinho = 0 }) {
  return (
    <header className="header">
      <h1 className="logo">
        <span className="eco">Eco</span>
        <span className="trend">Trend</span>
      </h1>
      
      <button className="btn-carrinho" onClick={abrirCarrinho} aria-label="Abrir carrinho">
        <img src={carrinhoBranco} alt="Carrinho" className="icone-carrinho" />
        {itensCarrinho > 0 && <span className="badge-carrinho">{itensCarrinho}</span>}
      </button>
    </header>
  );
}
