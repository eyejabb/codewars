function nbDig(n, d) {
    var count = 0;
    for (var i = 0; i <= n; i++) {
      var squared = i * i;
      var digits = squared.toString().split('');
      for (var j = 0; j < digits.length; j++) {
        if (digits[j] == d) {
          count++;
        }
      }
    }
    return count;
  }