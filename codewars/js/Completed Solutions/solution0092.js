function setAlarm(employed, vacation){
    //take in arguement 'employed' and check to see if true?
      //if true, return true
      //if false, return false
      if(employed === true && vacation === false){
        return true;
      }else{
        return false;
      }
    }
 
 //alternatively,

  function setAlarm(employed, vacation){
    return employed === true && vacation === false;
    }