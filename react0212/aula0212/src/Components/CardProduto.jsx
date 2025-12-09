import "/src/CSS/cardproduto.css";

function CardProduto () {
    return (
        <div className="card-produto">
            <img  
                src="https://m.magazineluiza.com.br/a-static/420x420/pc-completo-i7-16gb-ssd-512gb-rx-580-8gb-kit-gamer-monitor-23-6-windows-10-clique-pc/purezabeauty/276/67f5db9e18c73649aa9dc8254853308a.jpeg" 
                alt=""
                className="card-image"
            /> 
      
            <h3 className="card-title">Produtos Selecionados</h3>
            <span className="card-price">R$ 199,90</span>
            <button className="card-button">Comprar</button>
        </div>
    );
}

export default CardProduto;

