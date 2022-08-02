import "./periodicTable.scss";
import { Link } from "react-router-dom";
import { slugify } from "../../functions/appFunctions";


// == Composant
const PeriodicTable = ({firstTabScheme, secondTabScheme, allElements}) => {
    
    const generateCells = (currentColumnScheme) => {

        let cellsTabJsx = [];
        
        allElements.find((objectCurrentElement) => {
              for(let cell of currentColumnScheme){
                if (objectCurrentElement.atomicNumber === cell){
                  cellsTabJsx.push(objectCurrentElement);
              }
          }
        }); 
          cellsTabJsx.reverse();
          return (
            cellsTabJsx.map((objectCurrent, index) => (
              <Link to={`/element/${objectCurrent.atomicNumber}`} key={index} className={`cell cell-${slugify(objectCurrent.groupBlock)}`}>
                <span className="cell-atomicNumber">{objectCurrent.atomicNumber}</span>
                <span className="cell-symbol">{objectCurrent.symbol}</span>
              </Link>
      
            )))
      }
    return (
        
            <div className="periodicTable">
                <div className="periodicTable-one">
                {firstTabScheme.map((currentScheme, index) => (
                    <div id ={`col-one-${currentScheme.nameCol}`} key={index} className="periodicTable-one-col">
                        {generateCells(currentScheme.SchemeCells)}
                    </div>
                ))}
                </div>
                <div className="periodicTable-two">
                {secondTabScheme.map((currentScheme, index) => (
                    <div id ={`col-two-${currentScheme.nameCol}`} key={index} className="periodicTable-two-col">
                        {generateCells(currentScheme.SchemeCells)}
                    </div>
                ))}
                </div>
            </div>
        )
    }
// == Export
export default PeriodicTable;
