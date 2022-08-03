// == Import dependencies
import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Routes, Route } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

// import locals components
import Element from "src/components/Element"
import Header from "src/components/Header";
import PeriodicTable from "src/components/PeriodicTable";

// import styles
import "./app.scss";

// import actions 
import { getElementsFromApi } from '../../actions/periodicTable';
import { activeCarrousel, setDisplayElementCurrent, setSchemeElementAnimate, headerChangeValue} from '../../actions/element';

// import functions 
import { carrouselAnimation, decrementCurrentElement, incrementCurrentElement } from '../../functions/elementFunctions';

const App = () => {

  const location = useLocation();
  const dispatch = useDispatch();


  //Data recovery in the state
  const allElements = useSelector((state) => state.periodicTable.allElements);
  const appLoaded = useSelector((state) => state.loader.loading);
  const tabsElementsCurrent = useSelector((state) => state.element.displayElementCurrent);
  const SchemeElementsAnimate = useSelector((state) => state.element.schemeElementsAnimate);

  //Function that activates the element page carrousel
  const activatedCarrousel = () => {
      if (location.pathname.indexOf("element") === 1){
        dispatch(activeCarrousel(true));
      }else {
        dispatch(activeCarrousel(false));
      }
  }
  //Function that allows the change of the header
  const changeHeader = () => {
    if (location.pathname.indexOf("element") === 1){
      dispatch(headerChangeValue(1));
    }else {
      dispatch(headerChangeValue(0));
    }
}
  
// listen to page scroll
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
// Execution of the action that allows the acquisition of data
  useEffect(() => {
    dispatch(getElementsFromApi());
  }, []);

//Enabling the carousel
  useEffect(() => {
    activatedCarrousel();
    changeHeader();
  }, [location]);


    return (
      <div onWheel={activeCarrousel ? handleScroll : undefined} className="app">
        <Header />

        {!appLoaded && (
          <Routes>
            <Route
              path="/"
              element={
                <PeriodicTable
                  allElements={allElements}
                />
              }
            />
            <Route
              path="/element/:atomicNumber"
              element={<Element allElements={allElements} />}
            />
            <Route path="*" element={<div>Error: 404</div>} />
          </Routes>
        )}
      </div>
    );
}
// == Export
export default App;
