import axios from 'axios';

import { GET_ALL_ELEMENTS_FROM_API, setAllElementsInState } from '../actions/periodicTable';
import { setLoad } from '../actions/loader';
const elementsMiddleware = (store) => (next) => (action) => {

    if (action.type === GET_ALL_ELEMENTS_FROM_API){

        axios.get('https://periodic-table-elements-info.herokuapp.com/elements')

        .then((response) => {
       
        const actionToDispatch = setAllElementsInState(response.data);
            
        store.dispatch(actionToDispatch);
        store.dispatch(setLoad(false));
          
        })
        .catch((error) => {
          console.log('error :', error);
        })
    }
    next(action);
};

export default elementsMiddleware;