export const ACTIVE_CAROUSSEL = 'ACTIVE_CAROUSSEL';
export const SCHEME_ELEMENTS_ANIMATE = 'SCHEME_ELEMENTS_ANIMATE';
export const DISPLAY_ELEMENTS_CURRENT = 'DISPLAY_ELEMENTS_CURRENT';
export const CHANGE_HEADER = 'CHANGE_HEADER';


export const activeCarrousel = (active) => ({
    type: ACTIVE_CAROUSSEL,
    value:active,
})
export const headerChangeValue = (headerValue) => ({
    type: CHANGE_HEADER,
    value:headerValue,
})
export const setSchemeElementAnimate = (arrayScheme) => ({
    type: SCHEME_ELEMENTS_ANIMATE,
    value:arrayScheme,
})
export const setDisplayElementCurrent = (arrayElements) => ({
    type: DISPLAY_ELEMENTS_CURRENT,
    value:arrayElements,
})