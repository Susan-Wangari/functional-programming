//checks whether all the elements meet the specified condition, returns true or false
function checkPositive(arr) {
    
  return arr.every(val => val > 0);
    
  }
  checkPositive([1, 2, 3, -4, 5]);
  