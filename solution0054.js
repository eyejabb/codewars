function sumDigits(number) {
    // Convert the number to its absolute value
    number = Math.abs(number);
  
    // Convert the number to a string
    const numberString = number.toString();
  
    // Initialize a variable to store the sum of digits
    let digitSum = 0;
  
    // Iterate through each character of the number string
    for (let i = 0; i < numberString.length; i++) {
      // Convert the character back to a number and add it to the sum
      digitSum += parseInt(numberString[i]);
    }
  
    // Return the sum of digits
    return digitSum;
  }
  
// function sumDigits(number){
// number = Math.abs(number)
// const numberString = number.toString();

// let digitSum = 0;

// for (let index = 0; index < numberString.length; index++) {
//     digitSum += parseInt(numberString[index]);
//     return digitSum;
// }
// }
