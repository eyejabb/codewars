function remove(string) {
    let result = '';
    
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== '!') {
        result += string[i];
      }
    }
    
    result += '!';
    return result;
  }