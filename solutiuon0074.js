function basicOp(operation, value1, value2)
{
  //check for operator in 'operation' argument
  //start with value1 and value2, assign operator from value1 to value2
  //return the sum of value1 and value2
  if(operation === '+'){
    return value1 + value2;
  }else if(operation === '-'){
    return value1 - value2;
  }else if(operation === '*'){
    return value1 * value2;
  }else{
    return value1 / value2;
  }
}