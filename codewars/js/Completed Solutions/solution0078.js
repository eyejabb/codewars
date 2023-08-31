function invert(array) {
    let arr2 = []
    for (let i = 0; i < array.length; i++){
      arr2.push(array[i] * -1)
    }
     return arr2;
  }