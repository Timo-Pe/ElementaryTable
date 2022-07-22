import "./element.scss";
import { useParams } from "react-router-dom";
import Carrousel from "src/components/Carrousel";

// == Composant
const Element = ({animate, stateAnimateScheme}) => {

    const {atomicNumber} = useParams();
    


    return (
        
            <div   className="elementPage" >

                
                <Carrousel stateAnimateScheme={stateAnimateScheme} />

            </div>
    
        )
    }
// == Export
export default Element;
