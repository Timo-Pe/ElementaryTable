// == Import
import React, { useState, useEffect } from 'react';
import Header from "src/components/Header";
import "./app.scss";
import axios from "axios";
import tabSchemeOne from 'src/datas/tabSchemeOne';
import tabSchemeTwo from 'src/datas/tabSchemeTwo';
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
      <PeriodicTable 
            slugifyFunction={slugify} 
            tabAllElements={elementstab} 
            firstTabScheme={tabSchemeOne} 
            secondTabScheme={tabSchemeTwo}
            />
      
    </div>
  );
}
// == Export
export default App;
