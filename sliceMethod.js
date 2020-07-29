//returns  copy of certain elements of an array and does not change the original array
function sliceArray(anim, beginSlice, endSlice) {
  return inputAnim.slice(beginSlice, endSlice);
  
  }
  var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);
  