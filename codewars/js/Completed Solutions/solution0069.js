function oddCount(n){
    //1. take in a number represented by "n"
    //2. find the odd numbers less than the number provided by "n"
    //3. return the amount of numbers in the array of odd numbers in step 2
    let countOdd = 0
    for(i = 1; i < n; i = i + 2){
        countOdd++
    }
    return countOdd;
  }