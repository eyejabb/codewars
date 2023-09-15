function validate(n){

    // step 1
    
    // n -> break i into a string/ array 
    
         let myFunc = num => Number(num);
    
        var intArr = Array.from(String(n), myFunc);
    
        // now intArr contains the arr we need to work on
    
    // step 2 Double every other digit, scanning from right to left, starting from the second digit (from the right)
    
    // if odd -> double every other digit starting with the second -> 12345 ==> [1, 2, 3, 4, 5] ==> [1, 4, 3, 8, 5]
    // if even  -> double every other digit starting with the first
    
      var arrayLen = intArr.length;
    
      // if n = even
      if(arrayLen%2 == 0){
    
        // start with first digit and double every other digit
    
        for(let i=0; i<arrayLen; i = i+2){
    
    
          intArr[i] = intArr[i]*2;
    
          if(intArr[i]>9){
            intArr[i] = intArr[i] - 9;
          }
    
        }
    
      // n = odd
      }
    else{
    
      for(let i=1; i<arrayLen; i= i+2){
    
          intArr[i] = intArr[i]*2;
          if(intArr[i]>9){
            intArr[i] = intArr[i] - 9;
          }
        }
    }
    
    
    // step 3 sum all the digits 
       var Sum = 0;
       for (var i = 0; i < arrayLen; i++) {
            Sum += intArr[i]
        }
    
    if(Sum%10==0){
      return true;
    }
    else{
      return false;
    }
    
    
    
    
    
    }