import "./element.scss";
import { useParams } from "react-router-dom";
import Carrousel from "src/components/Carrousel";
import React, { useEffect } from 'react';

// == Composant
const Element = ({ setCurrentElementState , slugifyFunction, currentElements, allElements, stateAnimateScheme}) => {

    //const {atomicNumber} = useParams();
    //let currentNomber = parseInt(atomicNumber)
        let elementCurrent  = allElements.find(item => item.atomicNumber == currentElements[2]);
       
        let tabsElements = [];
       
        const findDisplayElements = () => {
            for (let element of currentElements){
                const currentElement = allElements.find(item => item.atomicNumber == element);
                tabsElements.push(currentElement);
            }
           
        }
            findDisplayElements();
    return (

            <div className="elementPage" >
                <Carrousel  slugifyFunction={slugifyFunction} stateAnimateScheme={stateAnimateScheme} currentElements={tabsElements} />
                <div className="elementPage-details">
                    <h1 className='elementPage-details-title'>{elementCurrent.name}</h1>
                    <div className='elementPage-details-listContainer'>
                        <ul className='elementPage-details-list-one'>
                            <li>Année de decouverte : <span>{elementCurrent.yearDiscovered}</span></li>
                            <li>Masse atomique: <span>{elementCurrent.atomicMass}</span></li>
                            <li>Densité: <span>{elementCurrent.density}</span></li>
                            <li>Affinité electronique : <span>{elementCurrent.electronAffinity}</span></li>
                            <li>Electro Negativité: <span>{elementCurrent.electronegativity}</span></li>
                        </ul>
                        <ul className='elementPage-details-list-two'>
                            <li>Rayon atomique : <span>{elementCurrent.atomicRadius}</span></li>
                            <li>Etat Standard : <span>{elementCurrent.standardState}</span></li>
                            <li>Point d'ébullition : <span>{elementCurrent.boilingPoint}</span></li>
                            <li>Point de fusion : <span>{elementCurrent.meltingPoint}</span></li>
                            <li>Groupe : <span>{elementCurrent.groupBlock}</span></li>
                        </ul>
                    </div>
                </div>
                <p className='elementPage-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div className={`elementPage-elementBackground elementBackground-${slugifyFunction(elementCurrent.groupBlock)}`}>
                    <span className='elementPage-elementBackground-atomicNumber'>{elementCurrent.atomicNumber}</span>
                    <span className='elementPage-elementBackground-symbol'>{elementCurrent.symbol}</span>
                </div>
            </div>
    
        )
    }
// == Export
export default Element;
