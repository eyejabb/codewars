function removeChar(str){
    //take in the string 'str'
    //convert to array
    //remove first character from 'str'
    //remove last character from 'str'
    //return string
    const strArray = str.split('');
    strArray.shift();
    strArray.pop();
    const modifiedStr = strArray.join('');
  };

  removeChar('hello')


  function removeChar(str) {
    let shortStr = ""
    for(let i = 1; i < str.length - 1; i++) {
      shortStr += str[i]
    }
    return shortStr
  };
  
  
  
  