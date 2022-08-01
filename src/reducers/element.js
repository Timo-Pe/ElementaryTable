import { ACTIVE_CAROUSSEL } from '../actions/loader';
import { SCHEME_ELEMENTS_ANIMATE, DISPLAY_ELEMENTS_CURRENT } from '../actions/element';

const initialState = {
   activeCaroussel: false,
   schemeElementsAnimate:[0,1,2,3,4],
   displayElementCurrent:[117,118,1,2,3],
  };


const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case 'ACTIVE_CAROUSSEL':
        return {
          // on déverse toutes les infos du state actuel
          ...state,
          // on applique les modifications
          activeCaroussel: action.value,
        };
        case 'SCHEME_ELEMENTS_ANIMATE':
        return {
          // on déverse toutes les infos du state actuel
          ...state,
          // on applique les modifications
          schemeElementsAnimate: action.value,
        };
        case 'DISPLAY_ELEMENTS_CURRENT':
        return {
          // on déverse toutes les infos du state actuel
          ...state,
          // on applique les modifications
          displayElementCurrent: action.value,
        };
      default:
        return state;
    }
  };

export default reducer;