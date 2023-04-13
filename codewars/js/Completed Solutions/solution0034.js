function betterThanAverage(classPoints, yourPoints) {
    var total = 0;
    for(var i = 0; i < classPoints.length; i++) {
        total += classPoints[i];
    }
    var avg = total / classPoints.length;
    if (avg >= yourPoints){
        return false;
    }else{
        return true;
    }
  }
  