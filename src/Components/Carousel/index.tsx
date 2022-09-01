import ArrowLeft from "../../Assets/Img/arrow-left.svg"
import ArrowRight from "../../Assets/Img/arrow-right.svg"
import { card } from "../../services/card.array"
import "../../Assets/Styles/Css/carousel.css"
import { useRef } from "react"

export const Carousel = () => {
    const carousel = useRef<any>(null);

    const handleLefClick = (e:any) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    const handlerigthClick = (e:any) => {
        e.preventDefault();
        console.log(carousel.current.offsetWidth);
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }
    return (
        <section className="container--carousel">
            <div className="carousel--header">
                <div className="carousel--header-title">
                    <h2>Comece Agora!</h2>
                    <p>Veja como é fácil e rápido!</p>
                </div>
                <div className="carousel--header-btn">
                    <button onClick={handleLefClick}>
                        <img src={ArrowLeft} alt="botão da esqueda" />
                    </button>
                    <button onClick={handlerigthClick}>
                        <img src={ArrowRight} alt="botão da direita" />
                    </button>
                </div>
            </div>
            <main className="carousel--cards" ref={carousel}>
                {card.map((el, index) => {
                    const { title, description, image } = el
                    return (
                        <ul key={index}
                            className="carousel--card-list">
                            <li>
                                <h3>{title}</h3>
                            </li>
                            <li>
                                <p>{description}</p>
                            </li>
                            <li className="card--list-img">
                                <img src={image} alt={title} />
                            </li>

                        </ul>

                    )
                })}

            </main>
        </section>
    )
}