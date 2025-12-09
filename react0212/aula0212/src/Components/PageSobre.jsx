import "/src/CSS/pagesobre.css";

function PageSobre () {
    return (
        <section id="sobre" className="sobre-container">

            <h2 className="sobre-title">Nossa Equipe</h2>

            <p className="sobre-paragraph">
                Conheça os profissionais por trás da nossa empresa
            </p>

            <ul className="sobre-list">
                <li>Paulo Santos - CEO</li>
                <li>Maria Oliveira - CIO</li>
                <li>João Silva - CFO</li>
                <li>Ana Costa - DIRETORA DE MARKETING</li>
            </ul>

        </section>
    )
}

export default PageSobre;
