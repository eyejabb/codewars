function evenOrOdd(number) {
    //return should be a string, "even" for even "odd" for odd
    //1. Start with a number
    //2. Figure out whether a number leaves a "1" when divided by two
    //3. Create a variable for strings "even" and "odd" corresponding to step 2
    //4. Return variable
    let even = "Even"
    let odd = "Odd"
    if(number % 2 === 0){
      return even;
    }else{
      return odd;
    }
  }