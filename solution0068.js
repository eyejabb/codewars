function makeNegative(num) {
    //check parameter to see if equal to zero
    //if parameter is not equal to zero, multiply by the number "-1" to convert parameter to negative number
    if(num === 0){
      return num;
    }else if(num > 0){
      return num * -1;
    }else{
      return num;
    }
  }