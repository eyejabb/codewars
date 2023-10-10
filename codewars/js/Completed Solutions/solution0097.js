function enough(cap, on, wait) {
    // your code here
     //take 'cap' parameter and compare 
     let totalPpl = on + wait
     if(totalPpl > cap){
       return totalPpl - cap;
     }
       return 0;
   }