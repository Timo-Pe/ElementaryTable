import "./carrousel.scss";


// == Composant
const Carrousel = ({stateAnimateScheme}) => {
   
    return (
            <div className='carrousel' >
                    {stateAnimateScheme.map((item, index) => (
                        <div key= {index} className='carrousel-element cell-halogen' data-pos={item}>{item}</div>
                    ))}
                
            </div>
        )
    }
// == Export
export default Carrousel;
