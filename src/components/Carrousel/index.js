import "./carrousel.scss";


// == Composant
const Carrousel = ({  slugifyFunction, currentElements, stateAnimateScheme}) => {
//si l'index du currentElement est egale a l'item du stateSheme alors tu genere un code avec 
    const generateJSXDiv = (item, index) => {
    
        const element = currentElements[item];
  
        return (<div key={index} className={`carrousel-element carrousel-element-${slugifyFunction(element.groupBlock)}`} data-pos={item}>
                    <span className="carrousel-element-atomicNumber">{element.atomicNumber}</span>
                    <span className="carrousel-element-symbol">{element.symbol}</span>
            </div>)
    }

    
    return (
    
            <div className='carrousel' >
                    {stateAnimateScheme.map((item, index) => generateJSXDiv(item, index))}
            </div>
        )
                    }
// == Export
export default Carrousel;

// j'ai un tableau de sheme qui change selon le state . Cependant l'index 2 doit toujours etre l'element en cours 
// je veux que l'index 2 soit egale au atomicNumber de l'element courant 
// je veux que l'index 1 soit egale au atomicNumber de l'element Précedent
// je veux que l'index 3 soit egale au atomicNumber de l'element suivant