export const GET_ALL_ELEMENTS = 'GET_ALL_ELEMENTS';


export const getAllElements = (listItems) => ({
    type: GET_ALL_ELEMENTS,
    listItems:listItems,
})