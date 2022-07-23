import "./element.scss";
import { useParams } from "react-router-dom";
import Carrousel from "src/components/Carrousel";

// == Composant
const Element = ({allElements, stateAnimateScheme}) => {

    const {atomicNumber} = useParams();
    
    const elementCurrent = allElements.find(item => item.atomicNumber == atomicNumber);
    console.log(elementCurrent)
    return (

            <div className="elementPage" >
                <Carrousel stateAnimateScheme={stateAnimateScheme} />
                <div className="elementPage-details">
                    <h1 className='elementPage-details-title'>{elementCurrent.name}</h1>
                    <div className='elementPage-details-listContainer'>
                        <ul className='elementPage-details-list-one'>
                            <li>Année de decouverte :<span>{elementCurrent.yearDiscovered}</span></li>
                            <li>Masse atomique:<span>8</span></li>
                            <li>Densité:<span>10</span></li>
                            <li>Affinité electronique : <span>10</span></li>
                            <li>Electro Negativité: <span>1</span></li>
                        </ul>
                        <ul className='elementPage-details-list-two'>
                            <li>Rayon atomique :<span>10</span></li>
                            <li>Etat Standard :<span>Gas</span></li>
                            <li>Point d'ébullition :<span>1615</span></li>
                            <li>Point de fusion :<span>454</span></li>
                            <li>Groupe : <span>Transition Metal</span></li>
                        </ul>
                    </div>
                </div>
                <p className='elementPage-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div className="elementPage-elementBackground">
                    <span className='elementPage-elementBackground-atomicNumber'>{elementCurrent.atomicNumber}</span>
                    <span className='elementPage-elementBackground-symbol'>{elementCurrent.symbol}</span>
                </div>
            </div>
    
        )
    }
// == Export
export default Element;
