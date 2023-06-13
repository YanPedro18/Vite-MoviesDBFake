import { Img, Title } from "../../Styles";
import "./card.css"

// eslint-disable-next-line react/prop-types
function Card({title, imgSrc}) {
    return(
        <>
            <div className="card">
                <Img src={imgSrc} alt="" />
                <Title>{title}</Title>
            </div>
        </>
    );

}

export default Card;