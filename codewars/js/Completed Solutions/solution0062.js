function squareSum(numbers){
    //square each individual integer in array
    let total = 0;
      for(i = 0; i < numbers.length; i++){
        total = (numbers[i] * numbers[i]) + total;
      }
      console.log(total)
    //for each time that the loop runs,  the square of argument
    return total
    }