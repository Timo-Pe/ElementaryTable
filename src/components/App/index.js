// == Import
import React, { useState, useEffect } from 'react';
import Header from "src/components/Header";
import "./app.scss";
import axios from "axios";
import tabSchemeOne from 'src/datas/tabSchemeOne';
import tabSchemeTwo from 'src/datas/tabSchemeTwo';
import PeriodicTable from "src/components/PeriodicTable";
import { Routes, Route } from 'react-router';
import Element from "src/components/Element"
// == Composant
const App = () => {

  const [elementstab, setElementstab] = useState([]);
  const [schemeElementAnimate, setSchemeElementAnimate] = useState([-2,-1,0,1,2]);
  



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
// [-2,-1,0,1,2]

// [2,-2,-1,0,1]

    useEffect(() => {
      loadElements();

    }, []);

    const handleClickAnimate = () => {
      let tabAlexa = [];
    
      for(let i of schemeElementAnimate){
        i--
        if (i === -3) { i = 2 }

        tabAlexa.push(i)
      }
      setSchemeElementAnimate(tabAlexa);
    }

    return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<PeriodicTable 
            slugifyFunction={slugify} 
            tabAllElements={elementstab} 
            firstTabScheme={tabSchemeOne} 
            secondTabScheme={tabSchemeTwo}
            /> } />
        <Route path="/element/:atomicNumber" element={<Element animate={handleClickAnimate} stateAnimateScheme={schemeElementAnimate} />} />
        <Route path="*" element={<div>Error: 404</div>}/>
      </Routes>
      
      
    </div>
  );
}
// == Export
export default App;
