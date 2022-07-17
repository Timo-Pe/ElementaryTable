import "./periodicTable.scss";

// == Composant
const PeriodicTable = ({generateCell, tabScheme}) => (
            <div className="periodicTable">
                {tabScheme.map((item, index) => (
                    <div id ={`col-${item.nameCol}`} key={index} className="periodicTable-col">
                        {generateCell(item.SchemeCells)}
                    </div>
                ))}
            </div>
        )

// == Export
export default PeriodicTable;
