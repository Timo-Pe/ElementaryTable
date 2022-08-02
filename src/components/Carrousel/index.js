import "./carrousel.scss";
import { findDisplayElements } from "../../functions/elementFunctions";
import { useSelector } from "react-redux";

// == Composant
const Carrousel = ({ slugifyFunction , allElements, displayElementCurrent}) => {

    const stateAnimateScheme = useSelector((state) => state.element.schemeElementsAnimate);

    const generateCarrouselElement = (position, index) => {
        const arrayDisplayElement = findDisplayElements(displayElementCurrent, allElements);
        const elementGenerated = arrayDisplayElement[position];
  
        return (
            <div key={index} className={`carrousel-element carrousel-element-${slugifyFunction(elementGenerated.groupBlock)}`} data-pos={position}>
                <span className="carrousel-element-atomicNumber">{elementGenerated.atomicNumber}</span>
                <span className="carrousel-element-symbol">{elementGenerated.symbol}</span>
            </div>)
        }

        return (
            <div className='carrousel' >
                    {stateAnimateScheme.map((position, index) => generateCarrouselElement(position, index))}
            </div>
        )
}
// == Export
export default Carrousel;
