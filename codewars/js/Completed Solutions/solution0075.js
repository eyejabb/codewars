function litres(time) {
    //take the number of hours in 'time' 
    //convert the hours into amount of litres per hour
    //round the number of litres to the smallest value
    //return liters
    let litreNum = Math.floor(time) * 0.5
    return Math.floor(litreNum);
  }