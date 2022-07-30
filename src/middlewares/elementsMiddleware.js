import axios from 'axios';

import { GET_ALL_ELEMENTS, getAllElements } from '../actions/periodicTable';

const elementsMiddleware = (store) => (next) => (action) => {

    if (action.type === GET_ALL_ELEMENTS){

        axios.get('https://periodic-table-elements-info.herokuapp.com/elements')

        .then((response) => {
       
        const actionToDispatch = getAllElements(response.data);
            
          store.dispatch(actionToDispatch);
        })
        .catch((error) => {
          console.log('error :', error);
        })
    }
    next(action);
};

export default elementsMiddleware;