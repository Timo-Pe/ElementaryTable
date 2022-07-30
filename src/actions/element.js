export const IS_LOADED = 'IS_LOADED';


export const isLoading = (newValue) => ({
    type: IS_LOADED,
    value:newValue,
})