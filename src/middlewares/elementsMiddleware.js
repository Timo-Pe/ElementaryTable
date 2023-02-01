import axios from 'axios';

import { GET_ALL_ELEMENTS_FROM_API, setAllElementsInState } from '../actions/periodicTable';
import { setLoad } from '../actions/loader';
import data from 'src/datas/api-allElements.json';

const elementsMiddleware = (store) => (next) => (action) => {

    if (action.type === GET_ALL_ELEMENTS_FROM_API){

        axios.get('/api-allElements.json')

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