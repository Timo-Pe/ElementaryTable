
// Function 
export const findDisplayElements = (elementCurrent, allElements) => {
    let tabElementsJsx = [];
    for (let element of elementCurrent){
        tabElementsJsx.push(allElements.find(item => item.atomicNumber == element));
    }
   return tabElementsJsx;
}

export const carrouselAnimation = (senseRotation, schemeElementAnimate) => {
    let schemeElement = [];

    if (senseRotation === 0) {
      for(let i of schemeElementAnimate){
        i--
        if (i === -1) { i = 4 };
        schemeElement.push(i)
      }
    }else if (senseRotation === 1){

      for(let i of schemeElementAnimate){
        i++
        if (i === 5) { i = 0 }
        schemeElement.push(i)
      }
    }
    return schemeElement;
  }


export  const decrementCurrentElement = (displayElementsCurrent) => {
    let tabsCopy = [];
    for (let element of displayElementsCurrent){
      if (element == 1) {
        tabsCopy.push(118);
      }else {
        tabsCopy.push(element - 1);
      }  
    }
    return tabsCopy;
  }

  export const incrementCurrentElement = (displayElementsCurrent) => {
    let tabsCopy = [];
    for (let element of displayElementsCurrent){
      if (element == 118) {
        tabsCopy.push(1);
      }else {
        tabsCopy.push(element + 1);
      }
      
      return tabsCopy ;
    }
  }

  export const initCurrentElement = (currentAtomicNumber) => {
    const arrayFinal = []
    const arrayScheme = [
        currentAtomicNumber - 2, 
        currentAtomicNumber - 1, 
        currentAtomicNumber, 
        currentAtomicNumber + 1, 
        currentAtomicNumber + 2
    ]
    for (let item of arrayScheme){
        if (item === 0) {
            arrayFinal.push(item = 118)
        }else if (item === -1){
            arrayFinal.push(item = 117)
        }else if (item === 119){
            arrayFinal.push(item = 1)
        }else if (item === 120){
            arrayFinal.push(item = 2)
        }else {
            arrayFinal.push(item);
        }
    }
    return arrayFinal;
}