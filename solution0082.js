function grow(x){
    //take array and loop through the number of length of array
    //multiply the values of array to total sum
    //return the sum
    let total = 1
    for(let i = 0; i < x.length; i++){
      total = x[i] * total;
      
    }
    return total;
  }