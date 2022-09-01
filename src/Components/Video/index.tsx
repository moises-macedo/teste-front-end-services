import LineTitle from "../../Assets/Img/line-title.svg";
import IconPlay from "../../Assets/Img/icon-play.svg";
import"../../Assets/Styles/Css/video.css"

export const Video = () =>{
    return(
        <section className="container--video">
            <div className="video--title">
                <h2>introdução</h2>
                <img src={LineTitle} alt="cores" />
            </div>
            <div className="video--display">
                <img src={IconPlay} alt="play-video" />
            </div>
        </section>
    )
}