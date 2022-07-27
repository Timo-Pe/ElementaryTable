import "./element.scss";
import { useParams } from "react-router-dom";
import Carrousel from "src/components/Carrousel";
import React, { useEffect } from 'react';

// == Composant
const Element = ({ setDisplayElementCurrent, displayElementCurrent, slugifyFunction, allElements, stateAnimateScheme}) => {

    const elementDisplay  = allElements.find(item => item.atomicNumber == displayElementCurrent[2]);
    const {atomicNumber} = useParams();
    const currentAtomicNumber = parseInt(atomicNumber);


    const findDisplayElements = () => {
        let tabElementsJsx = [];
        for (let element of displayElementCurrent){
            tabElementsJsx.push(allElements.find(item => item.atomicNumber == element));
        }
       return tabElementsJsx;
    }
    
    const initCurrentElement = () => {
        const arrayFinal = []
        const arrayScheme = [
            currentAtomicNumber - 2, 
            currentAtomicNumber - 1, 
            currentAtomicNumber, 
            currentAtomicNumber + 1, 
            currentAtomicNumber + 2
        ]
        for (let item of arrayScheme){
            if (item === 0) {
                arrayFinal.push(item = 118)
            }else if (item === -1){
                arrayFinal.push(item = 117)
            }else if (item === 119){
                arrayFinal.push(item = 1)
            }else if (item === 120){
                arrayFinal.push(item = 2)
            }else {
                arrayFinal.push(item);
            }
        }
        setDisplayElementCurrent(arrayFinal);
    }

    useEffect(() => {
        initCurrentElement();
    }, []);

  
    return (

            <div className="elementPage" >
                <Carrousel  slugifyFunction={slugifyFunction} stateAnimateScheme={stateAnimateScheme} findDisplayElements={findDisplayElements} />
                <div className="elementPage-details">
                    <h1 className='elementPage-details-title'>{elementDisplay.name}</h1>
                    <div className='elementPage-details-listContainer'>
                        <ul className='elementPage-details-list-one'>
                            <li>Année de decouverte : <span>{elementDisplay.yearDiscovered}</span></li>
                            <li>Masse atomique: <span>{elementDisplay.atomicMass}</span></li>
                            <li>Densité: <span>{elementDisplay.density}</span></li>
                            <li>Affinité electronique : <span>{elementDisplay.electronAffinity}</span></li>
                            <li>Electro Negativité: <span>{elementDisplay.electronegativity}</span></li>
                        </ul>
                        <ul className='elementPage-details-list-two'>
                            <li>Rayon atomique : <span>{elementDisplay.atomicRadius}</span></li>
                            <li>Etat Standard : <span>{elementDisplay.standardState}</span></li>
                            <li>Point d'ébullition : <span>{elementDisplay.boilingPoint}</span></li>
                            <li>Point de fusion : <span>{elementDisplay.meltingPoint}</span></li>
                            <li>Groupe : <span>{elementDisplay.groupBlock}</span></li>
                        </ul>
                    </div>
                </div>
                <div className={`elementPage-elementBackground elementBackground-${slugifyFunction(elementDisplay.groupBlock)}`}>
                    <span className='elementPage-elementBackground-atomicNumber'>{elementDisplay.atomicNumber}</span>
                    <span className='elementPage-elementBackground-symbol'>{elementDisplay.symbol}</span>
                </div>
            </div>
    
        )
    }
// == Export
export default Element;
