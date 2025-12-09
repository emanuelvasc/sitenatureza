import "/src/CSS/pagecontato.css";

function PageContato() {
  return (
    <section id="contato" className="contato-container">

      <h2 className="contato-title">Enviar uma mensagem</h2>

      <form className="contact-form">
        <input 
          type="text" 
          placeholder="Nome"
          className="contact-input"
        />

        <input 
          type="email" 
          placeholder="Email"
          className="contact-input"
        />

        <textarea 
          placeholder="Mensagem"
          className="contact-textarea"
        />

        <button type="submit" className="contact-button">
          Enviar
        </button>
      </form>

    </section>
  );
}

export default PageContato;

