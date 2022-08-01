// == Import dependencies
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
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
import { getElementsFromApi } from '../../actions/periodicTable';
import { activeCarrousel, setDisplayElementCurrent, setSchemeElementAnimate } from '../../actions/element';
// import functions 
import { carrouselAnimation, decrementCurrentElement, incrementCurrentElement } from '../../functions/elementFunctions';

const App = () => {


  //const [schemeElementAnimate, setSchemeElementAnimate] = useState([0,1,2,3,4]);
  //const [displayElementCurrent, setDisplayElementCurrent] = useState([117,118,1,2,3]);
  const location = useLocation();
  const dispatch = useDispatch();
  const appLoaded = useSelector((state) => state.loader.loading)
  const tabsElementsCurrent = useSelector((state) => state.element.displayElementCurrent)
  const SchemeElementsAnimate = useSelector((state) => state.element.schemeElementsAnimate)
  console.log(tabsElementsCurrent)
  const activatedCarrousel = () => {
      if (location.pathname.indexOf("element") === 1){
        dispatch(activeCarrousel(true));
      }else {
        dispatch(activeCarrousel(false));
      }

  }

  // const carrouselAnimation = (senseRotation) => {
  //   let schemeElement = [];

  //   if (senseRotation === 0) {
  //     for(let i of schemeElementAnimate){
  //       i--
  //       if (i === -1) { i = 4 };
  //       schemeElement.push(i)
  //     }
  //   }else if (senseRotation === 1){

  //     for(let i of schemeElementAnimate){
  //       i++
  //       if (i === 5) { i = 0 }
  //       schemeElement.push(i)
  //     }
  //   }
  //   setSchemeElementAnimate(schemeElement);
  // }

  // const decrementCurrentElement = (displayElementsCurrent) => {
  //   let tabsCopy = [];
  //   for (let element of displayElementsCurrent){
  //     if (element == 1) {
  //       tabsCopy.push(118);
  //     }else {
  //       tabsCopy.push(element - 1);
  //     }  
  //   }
  //   setDisplayElementCurrent(tabsCopy);
  // }

  const handleScroll = (e) => {
    if (e.deltaY > 0){
    setTimeout( () => { 
      dispatch(setSchemeElementAnimate(carrouselAnimation(0, SchemeElementsAnimate)))
      dispatch(setDisplayElementCurrent(incrementCurrentElement(tabsElementsCurrent)))
    }, 300)
  } 
    if (e.deltaY < 0){
      setTimeout( () => { 
        dispatch(setSchemeElementAnimate(carrouselAnimation(1, SchemeElementsAnimate)))
        dispatch(setDisplayElementCurrent(decrementCurrentElement(tabsElementsCurrent)))
      }, 300)
    }
}
  // const incrementCurrentElement = () => {
  //   let tabsCopy = [];
  //   for (let element of displayElementCurrent){
  //     if (element == 118) {
  //       tabsCopy.push(1);
  //     }else {
  //       tabsCopy.push(element + 1);
  //     }
      
  //     setDisplayElementCurrent(tabsCopy);
  //   }
  // }
  useEffect(() => {
    dispatch(getElementsFromApi());
  }, []);

  useEffect(() => {
    activatedCarrousel();
  }, [location]);


    return (
      
    <div onWheel={activeCarrousel ? handleScroll : undefined} className="app">
      <Header />
   
      {!appLoaded && (
        <Routes>
        <Route path="/" element={<PeriodicTable 
            firstTabScheme={tabSchemeOne} 
            secondTabScheme={tabSchemeTwo}
            /> } />
        <Route path='/element/:atomicNumber' element={<Element/>} />
        <Route path="*" element={<div>Error: 404</div>}/>
      </Routes>
      )}
      
   
    </div>
  );
}
// == Export
export default App;
