import "./carrousel.scss";


// == Composant
const Carrousel = ({animate, stateAnimateScheme}) => {
   
    return (
            <div className='carrousel'>
                <button onClick={animate} type="button">Button</button>
                    {stateAnimateScheme.map((item, index) => (
                        <div key= {index} className='element-carrousel cell-halogen' data-pos={item}>{item}</div>
                    ))}
                
            </div>
        )
    }
// == Export
export default Carrousel;
