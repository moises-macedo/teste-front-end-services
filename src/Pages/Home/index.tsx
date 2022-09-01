import { Carousel } from "../../Components/Carousel"
import { ImgLogo } from "../../Components/ImgLogo"
import { Login } from "../../Components/Login"
import { Video } from "../../Components/Video"

export const Home = () => {
    return (
        <>
            <ImgLogo />
            <Login />
            <Video />
            <Carousel />
        </>
    )
}