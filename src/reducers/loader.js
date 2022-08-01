import { APP_LOADING } from '../actions/loader';


const initialState = {
    loading: true
  };


const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case 'APP_LOADING':
        return {
          // on déverse toutes les infos du state actuel
          ...state,
          // on applique les modifications
          loading: action.value,
        };
      default:
        return state;
    }
  };

export default reducer;