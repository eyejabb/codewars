function digitize(n) {
    //code here
    //method to return positive integer
    //method to split integer's number into an individual array
    //method to reverse result
    let arr = String(n).split('').map(Number).reverse();
    return arr
  }