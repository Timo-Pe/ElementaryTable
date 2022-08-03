import "./element.scss";
import { useParams } from "react-router-dom";
import Carrousel from "src/components/Carrousel";
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { slugify } from "../../functions/appFunctions";
import { initCurrentElement } from '../../functions/elementFunctions';
import { setDisplayElementCurrent } from '../../actions/element';

// == Composant
const Element = ({allElements}) => {
    const dispatch = useDispatch();
    const {atomicNumber} = useParams();
    const currentAtomicNumber = parseInt(atomicNumber);

    const displayElementCurrent = useSelector((state) => state.element.displayElementCurrent);
    const elementDisplay  = allElements.find(item => item.atomicNumber == displayElementCurrent[2]);

    useEffect(() => {
      dispatch(
        setDisplayElementCurrent(initCurrentElement(currentAtomicNumber))
      );
    }, []);
  
    return (
      <div className="elementPage">
        <Carrousel
          slugifyFunction={slugify}
          allElements={allElements}
          displayElementCurrent={displayElementCurrent}
        />
        <div className="elementPage-details">
          <h1 className="elementPage-details-title">{elementDisplay.name}</h1>
          <div className="elementPage-details-listContainer">
            <ul className="elementPage-details-list-one">
              <li>
                Année de decouverte :{" "}
                <span>{elementDisplay.yearDiscovered}</span>
              </li>
              <li>
                Masse atomique: <span>{elementDisplay.atomicMass}</span>
              </li>
              <li>
                Densité: <span>{elementDisplay.density}</span>
              </li>
              <li>
                Affinité electronique :{" "}
                <span>{elementDisplay.electronAffinity}</span>
              </li>
              <li>
                Electro Negativité:{" "}
                <span>{elementDisplay.electronegativity}</span>
              </li>
            </ul>
            <ul className="elementPage-details-list-two">
              <li>
                Rayon atomique : <span>{elementDisplay.atomicRadius}</span>
              </li>
              <li>
                Etat Standard : <span>{elementDisplay.standardState}</span>
              </li>
              <li>
                Point d'ébullition : <span>{elementDisplay.boilingPoint}</span>
              </li>
              <li>
                Point de fusion : <span>{elementDisplay.meltingPoint}</span>
              </li>
              <li>
                Groupe : <span>{elementDisplay.groupBlock}</span>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`elementPage-elementBackground elementBackground-${slugify(
            elementDisplay.groupBlock
          )}`}
        >
          <span className="elementPage-elementBackground-atomicNumber">
            {elementDisplay.atomicNumber}
          </span>
          <span className="elementPage-elementBackground-symbol">
            {elementDisplay.symbol}
          </span>
        </div>
      </div>
    );
    }
// == Export
export default Element;
