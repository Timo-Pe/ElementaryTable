// == Import
import React, { useState, useEffect } from 'react';
import Header from "src/components/Header";
import "./app.scss";
import axios from "axios";
import tabSchemeColonne from 'src/datas/tabSchemeColonne';
import PeriodicTable from "src/components/PeriodicTable";
// == Composant
const App = () => {

  const [elementstab, setElementstab] = useState([]);


const slugify = (text) => {
  return text
    .toString()                           // Cast to string (optional)
    .normalize('NFKD')            // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
    .toLowerCase()                  // Convert the string to lowercase letters
    .trim()                                  // Remove whitespace from both sides of a string (optional)
    .replace(/\s+/g, '-')            // Replace spaces with -
    .replace(/[^\w\-]+/g, '')     // Remove all non-word chars
    .replace(/\-\-+/g, '-');        // Replace multiple - with single -
}
    // Function that allows the generation of columns with the number of cells
const generateCells = (tabs) => {

  let cellsTabJsx = [];
  
    elementstab.find((item) => {
        for( let cell of tabs){
          if (item.atomicNumber === cell){
            cellsTabJsx.push(item);
        }
    }
  }); 
    cellsTabJsx.reverse();
    return (
      cellsTabJsx.map((item, index) => (
        <a href ='#' key={index} className={`cell cell-${slugify(item.groupBlock)}`}>
          <span className="cell-atomicNumber">{item.atomicNumber}</span>
          <span className="cell-symbol">{item.symbol}</span>
        </a>

      )))

}

  const loadElements = () => {

    axios.get('https://periodic-table-elements-info.herokuapp.com/elements')

    .then((response) => {
      setElementstab(response.data);
    })
    .catch((error) => {
      console.log('error :', error);
    })
  }

    useEffect(() => {
      loadElements();

    }, []);

   
    return (
    <div className="app">
      <Header />
      <PeriodicTable generateCell={generateCells} tabScheme = {tabSchemeColonne}/>
      
    </div>
  );
}
// == Export
export default App;
