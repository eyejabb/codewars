function points(games) {
    //take argument and return number value
    let sumValue = 0
    for(i = 0; i < games.length; i++){
      let numArray = games[i].split(':')
      if(numArray[0] > numArray[1]){
        sumValue += 3
      }else if(numArray[0] < numArray[1]){
        sumValue += 0
      }else{
        sumValue += 1
      }
    }
    return sumValue
  }
  