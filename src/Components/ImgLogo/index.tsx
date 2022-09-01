import LogoService from "../../Assets/Img/logo-servicespay.svg"
import '../../Assets/Styles/Css/imgLogo.css';
export const ImgLogo = () => {
    return (
        <div className="container--imgLogo">
            <div className="box--img">
                <img src={LogoService} alt="Logo grupos services pay" />
            </div>
        </div>
    )
}