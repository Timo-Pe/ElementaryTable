import { IS_LOADED } from '../actions/element';


const initialState = {
    load: true
  };



const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case 'IS_LOADED':
        return {
          // on déverse toutes les infos du state actuel
          ...state,
          // on applique les modifications
          load: action.value,
        };
      default:
        return state;
    }
  };

export default reducer;