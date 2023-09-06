function countPositivesSumNegatives(input) {
    if(input === null || input.length === 0)
      return []
    //
    let positiveNum = 0
    let negativeNum = 0
    let emptyArray = []
    for(let i = 0; i < input.length; i++){
  //     if(input[i] == 0){
  //       return emptyArray;
      if(input[i] > 0){
  //       positiveNum.push(input[i])
  //       positiveNum.length
        positiveNum++
        console.log(positiveNum)
  //       return positiveNum;
      
      }else{
        negativeNum += input[i];
  //       negativeNum;
      }
    }
      console.log(positiveNum)
      console.log(negativeNum)
      emptyArray.push(positiveNum, negativeNum)
      return emptyArray;
}