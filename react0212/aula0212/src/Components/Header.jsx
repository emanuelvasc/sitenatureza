import '/src/CSS/header.css';
function Header () {
    return (
          <header className="header-style">
            <div className="header-logo-container">
               <span className='logo-image'>Logotipo</span>
               <span className='logo-text'>Loja Virtual</span>
            </div>

            <nav className="nav-menu">
                <a href="#inicio" className="nav-link">Início</a>
                <a href="#sobre" className="nav-link">Sobre</a>
                <a href="#produtos" className="nav-link">Produtos</a>
                <a href="#contato" className="nav-link">Contato</a>
            </nav>
          </header>
    
    )
}

export default Header;