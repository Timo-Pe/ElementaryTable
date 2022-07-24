import "./carrousel.scss";


// == Composant
const Carrousel = ({ afterCurrent, afterPositiveCurrent, slugifyFunction, beforeNegativeCurrent ,beforeCurrent,currentElement, stateAnimateScheme}) => {



    
    return (
    
            <div className='carrousel' >
                    {stateAnimateScheme.map((item, index) => (
    
                        <div key={index} className='carrousel-element cell-halogen' data-pos={item}>
                            <span className="carrousel-element-atomicNumber">
                                {item == -2 ?  afterPositiveCurrent.atomicNumber : ""}
                                {item == -1 ? afterCurrent.atomicNumber : ""}
                                {item == 0 ? currentElement.atomicNumber : ""}
                                {item == 1 ? beforeCurrent.atomicNumber : ""}
                                {item == 2 ? beforeNegativeCurrent.atomicNumber : ""}
                                </span>
                            <span className="carrousel-element-symbol"> 
                                {item == -2 ? afterPositiveCurrent.symbol : ""}
                                {item == -1 ? afterCurrent.symbol : ""}
                                {item == 0 ? currentElement.symbol : ""}
                                {item == 1 ? beforeCurrent.symbol : ""}
                                {item == 2 ? beforeNegativeCurrent.symbol : ""}</span>
                        </div>
                        )
                    
                    )}
                
            </div>
        )
                    }
// == Export
export default Carrousel;

// j'ai un tableau de sheme qui change selon le state . Cependant l'index 2 doit toujours etre l'element en cours 
// je veux que l'index 2 soit egale au atomicNumber de l'element courant 
// je veux que l'index 1 soit egale au atomicNumber de l'element Précedent
// je veux que l'index 3 soit egale au atomicNumber de l'element suivant