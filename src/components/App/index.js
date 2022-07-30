// == Import dependencies
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Routes, Route } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
// import locals components
import Element from "src/components/Element"
import Header from "src/components/Header";
import PeriodicTable from "src/components/PeriodicTable";
// import styles
import "./app.scss";
// import locals Datas
import tabSchemeOne from 'src/datas/tabSchemeOne';
import tabSchemeTwo from 'src/datas/tabSchemeTwo';

// import actions 
import { isLoading } from '../../actions/element';


const App = () => {

  const [elementstab, setElementstab] = useState([]);

  const [schemeElementAnimate, setSchemeElementAnimate] = useState([0,1,2,3,4]);
  const [activeCarrousel, setActiveCarrousel] = useState(false);
  
  const [displayElementCurrent, setDisplayElementCurrent] = useState([117,118,1,2,3]);
  const location = useLocation();
  const dispatch = useDispatch();
  const loaded = useSelector((state) => state.element.load)


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
      
      setDisplayElementCurrent(tabsCopy);
    }
  }
  const loadElements = () => {

    axios.get('https://periodic-table-elements-info.herokuapp.com/elements')

    .then((response) => {
      setElementstab(response.data);
      dispatch(isLoading(false));

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
    //loadElements();
    
  }, []);

  useEffect(() => {
    activatedCarrousel();
  }, [location]);


    return (
      
    <div onWheel={activeCarrousel ? handleScroll : undefined} className="app">
      <Header />

      {!loaded && (
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
