// == Import
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
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
  const [schemeElementAnimate, setSchemeElementAnimate] = useState([0,1,2,3,4]);
  const [activeCarrousel, setActiveCarrousel] = useState(false);
  const [loading, setLoading] = useState(true);
  const [displayElementCurrent, setDisplayElementCurrent] = useState([117,118,1,2,3]);
  const location = useLocation();


  const activatedCarrousel = () => {
      if (location.pathname.indexOf("element") === 1){
        setActiveCarrousel(true);
      }else {
        setActiveCarrousel(false);
      }

  }

  const carrouselAnimation = (senseRotation) => {
    let schemeElement = [];

    if (senseRotation === 0) {
      for(let i of schemeElementAnimate){
        i--
        if (i === -1) { i = 4 };
        schemeElement.push(i)
      }
    }else if (senseRotation === 1){

      for(let i of schemeElementAnimate){
        i++
        if (i === 5) { i = 0 }
        schemeElement.push(i)
      }
    }
    setSchemeElementAnimate(schemeElement);
  }


  const decrementCurrentElement = () => {
    let tabsCopy = [];
    for (let element of displayElementCurrent){
      if (element == 1) {
        tabsCopy.push(118);
      }else {
        tabsCopy.push(element - 1);
      }  
    }
    setDisplayElementCurrent(tabsCopy);
  }

  const handleScroll = (e) => {
    if (e.deltaY > 0){
    setTimeout( () => { 
      carrouselAnimation(0)
      incrementCurrentElement()
      
    }, 300)
  } 
    if (e.deltaY < 0){
      setTimeout( () => { 
        carrouselAnimation(1)
        decrementCurrentElement()
        
      }, 300)
    }
}
  const incrementCurrentElement = () => {
    let tabsCopy = [];
    for (let element of displayElementCurrent){
      if (element == 118) {
        tabsCopy.push(1);
      }else {
        tabsCopy.push(element + 1);
      }
      
    }
    setDisplayElementCurrent(tabsCopy);
  }
  const loadElements = () => {

    axios.get('https://periodic-table-elements-info.herokuapp.com/elements')

    .then((response) => {
      setElementstab(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log('error :', error);
    })
  }

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
    
  useEffect(() => {
    loadElements();
 
  }, []);

  useEffect(() => {
    activatedCarrousel();
  }, [location]);


    return (
      
    <div onWheel={activeCarrousel ? handleScroll : undefined} className="app">
      <Header />

      {!loading && (
        <Routes>
        <Route path="/" element={<PeriodicTable 
            slugifyFunction={slugify} 
            tabAllElements={elementstab} 
            firstTabScheme={tabSchemeOne} 
            secondTabScheme={tabSchemeTwo}
            /> } />
        <Route path='/element/:atomicNumber' element={<Element setDisplayElementCurrent={setDisplayElementCurrent} displayElementCurrent={displayElementCurrent} slugifyFunction={slugify}  allElements={elementstab} stateAnimateScheme={schemeElementAnimate} />} />
        <Route path="*" element={<div>Error: 404</div>}/>
      </Routes>
      )}
      
   
    </div>
  );
}
// == Export
export default App;
