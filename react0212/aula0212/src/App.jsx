import "../src/CSS/global.css"
import Header from "/src/Components/Header.jsx";
import PageContato from "/src/Components/PageContato.jsx"
import PageInicio from "/src/Components/Pageinicio.jsx";
import PageProduto from "/src/Components/PageProduto.jsx";  
import PageSobre from "/src/Components/PageSobre.jsx";      
import Footer from "/src/Components/Footer.jsx";





function App () {
  return (
    <div>
      <header>
      <Header />
    </header>
    <main>
     <PageInicio />
     <PageProduto />
     <PageSobre />
     <PageContato />
     </main>
    <footer>
<Footer />
</footer>
</div>
)
}

export default App;