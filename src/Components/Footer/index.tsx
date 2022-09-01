import GrupoService from "../../Assets/Img/logo-gruposervices.svg";
import FooterGruposService from "../../Assets/Img/label-gs.svg";
import "../../Assets/Styles/Css/footer.css"

export const Footer = () => {
    return (
        <footer className="container--footer-bakcground">
            <section className="container--footer-desciption">

                <div className="footer--description-imgGrupo">
                    <img src={GrupoService} alt="Logo Grupo Service" />
                </div>
                <ul className="footer--description-links">
                    <li>
                        <a href="#">Quem somos</a>
                    </li>
                    <li>
                        <a href="#">Polílitca de privacidade</a>
                    </li>
                    <li>
                        <a href="#">Termos de uso</a>
                    </li>
                </ul>
                <div className="footer--description-imgApp">
                    <img src={FooterGruposService} alt="Plataforma desenvolvida pelo Grupo Services" />
                    <h4>Todos os direitos reservados ao Grupo Services</h4>
                </div>
                
            </section>

        </footer>
    )
}