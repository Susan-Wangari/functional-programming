//makes sure a global variable is not changed inside a function
// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add (arr, bookName) {
let newArr = [...arr]; //copies the booklist to a new array
  newArr.push(bookName);
  return newArr;
  
}

function remove (arr, bookName) {
let newArr = [...arr];
  if (newArr.indexOf(bookName) >= 0) {
//checks whether the bookName parameter is in new array.
    newArr.splice(newArr.indexOf(bookName), 1);
    return newArr;
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
