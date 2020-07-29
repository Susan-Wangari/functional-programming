//using push adds new elements to the end of an array hence causing mutation in the array
function nonMutatingPush(original, newItem) {
    return original.concat(newItem);
  }
  
  var first = [1, 2, 3];
  var second = [4, 5];
  nonMutatingPush(first, second);
  