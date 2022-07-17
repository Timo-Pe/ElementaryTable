import "./periodicTable.scss";

// == Composant
const PeriodicTable = ({slugifyFunction, tabAllElements, firstTabScheme, secondTabScheme}) => {
    

    // Function that allows the generation of columns with the number of cells
    const generateCells = (currentColumnScheme) => {

        let cellsTabJsx = [];
        
        tabAllElements.find((objectCurrentElement) => {
              for(let cell of currentColumnScheme){
                if (objectCurrentElement.atomicNumber === cell){
                  cellsTabJsx.push(objectCurrentElement);
              }
          }
        }); 
          cellsTabJsx.reverse();
          return (
            cellsTabJsx.map((objectCurrent, index) => (
              <a href ='#' key={index} className={`cell cell-${slugifyFunction(objectCurrent.groupBlock)}`}>
                <span className="cell-atomicNumber">{objectCurrent.atomicNumber}</span>
                <span className="cell-symbol">{objectCurrent.symbol}</span>
              </a>
      
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
