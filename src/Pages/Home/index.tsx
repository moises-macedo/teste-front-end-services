import { Carousel } from "../../Components/Carousel"
import { Footer } from "../../Components/Footer"
import { ImgLogo } from "../../Components/ImgLogo"
import { Login } from "../../Components/Login"
import { Video } from "../../Components/Video";
import"../../Assets/Styles/Css/page.css"

export const Home = () => {
    return (
        <>
            <div className="container--page">

                <ImgLogo />
                <Login />
            </div>
            <Video />
            <Carousel />
            <Footer />
        </>
    )
}