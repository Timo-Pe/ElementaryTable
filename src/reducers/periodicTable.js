import { GET_ALL_ELEMENTS } from "../actions/periodicTable";

const initialState = {
    allElements: [],
  };


const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case 'GET_ALL_ELEMENTS':
        return {
          // on déverse toutes les infos du state actuel
          ...state,
          // on applique les modifications
          allElements: action.listItems,
        };
      default:
        return state;
    }
  };

export default reducer;