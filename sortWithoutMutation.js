//to achieve sort without mutating the original array, first concat an empty array before using sort
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  
return [].concat(arr).sort(function(a, b) {
return a - b;
});

}
nonMutatingSort(globalArray);
