//splice() mutates the original array and hence should be avoided if possible, instead use slice 
function nonMutatingSplice(cities) {
    return cities.slice(0, 3);
  
  }
  var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  nonMutatingSplice(inputCities);
  