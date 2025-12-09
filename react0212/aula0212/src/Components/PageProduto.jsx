import React from 'react';
import CardProduto from './CardProduto.jsx';  
import "/src/CSS/pageprodutos.css";

function PageProduto() {                     
  return (
    <div id='produtos' className='page-container'>
      <h2 className='page-title-center'>Catálogo de Produtos</h2>

      <div className="card-list-container">
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
      </div>
    </div>
  );
}

export default PageProduto;


