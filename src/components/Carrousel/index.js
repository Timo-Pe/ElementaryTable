import "./carrousel.scss";


// == Composant
const Carrousel = ({ slugifyFunction, findDisplayElements, stateAnimateScheme}) => {

    const generateCarrouselElement = (item, index) => {
        let arrayDisplayElement = findDisplayElements();
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
