import "./carrousel.scss";
import { findDisplayElements } from "../../functions/elementFunctions";
import { useSelector } from "react-redux";

// == Composant
const Carrousel = ({ slugifyFunction , allElements}) => {
    const stateAnimateScheme = useSelector((state) => state.element.schemeElementsAnimate);
    const CurrentElements = useSelector((state) => state.element.displayElementCurrent);
    const generateCarrouselElement = (item, index) => {
        let arrayDisplayElement = findDisplayElements(CurrentElements, allElements);
        const elementGenerated = arrayDisplayElement[item];
  
        return (<div key={index} className={`carrousel-element carrousel-element-${slugifyFunction(elementGenerated.groupBlock)}`} data-pos={item}>
                    <span className="carrousel-element-atomicNumber">{elementGenerated.atomicNumber}</span>
                    <span className="carrousel-element-symbol">{elementGenerated.symbol}</span>
                </div>)
        }
        return (
    
            <div className='carrousel' >
                    {stateAnimateScheme.map((item, index) => generateCarrouselElement(item, index))}
            </div>
        )
}
// == Export
export default Carrousel;
