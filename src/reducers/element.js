import { ACTIVE_CAROUSSEL } from '../actions/loader';
import { SCHEME_ELEMENTS_ANIMATE, DISPLAY_ELEMENTS_CURRENT, CHANGE_HEADER } from '../actions/element';

const initialState = {
   activeCaroussel: false,
   schemeElementsAnimate:[0,1,2,3,4],
   displayElementCurrent:[117,118,1,2,3],
   headerValue:0,
  };


const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "ACTIVE_CAROUSSEL":
        return {
   
          ...state,
         
          activeCaroussel: action.value,
        };
      case "SCHEME_ELEMENTS_ANIMATE":
        return {
       
          ...state,
       
          schemeElementsAnimate: action.value,
        };
      case "DISPLAY_ELEMENTS_CURRENT":
        return {
         
          ...state,
        
          displayElementCurrent: action.value,
        };
        case "CHANGE_HEADER":
        return {

          ...state,
          headerValue: action.value,
        };
      default:
        return state;
    }
  };

export default reducer;