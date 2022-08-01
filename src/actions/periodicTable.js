export const GET_ALL_ELEMENTS = 'GET_ALL_ELEMENTS';
export const GET_ALL_ELEMENTS_FROM_API = 'GET_ALL_ELEMENTS_FROM_API';


export const setAllElementsInState = (listItems) => ({
    type: GET_ALL_ELEMENTS,
    listItems:listItems,
})

export const getElementsFromApi = () => ({
    type: GET_ALL_ELEMENTS_FROM_API
})