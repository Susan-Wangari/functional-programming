//used to join the elements of an array together to form a string
function sentensify(str) {
  return str.split(/\W/).join(" ");
  
  }
  sentensify("May-the-force-be-with-you");
  