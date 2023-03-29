
import ModuleCss from "./Card.module.scss";


interface CardPropTypes {
    /**Provide the width of the card in pixel ex:for 90px give 90 */
    width: number,
    /**Provide the height of the card in pixel ex:for 90px give 90*/
    height: number,
    /**children element inside the card*/
    children: JSX.Element
}
const Card = ({ width, height,children }:CardPropTypes) => {
    return <div className={ModuleCss.cardContainer} style={{width,height}} >
        {children}
    </div>
}

export default Card;