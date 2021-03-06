/* * * * * * * * * * * * * * * * * * * * * *
 *      PALEO JS PT 2: ARRAY METHODS       *
 * * * * * * * * * * * * * * * * * * * * * */

// Part of what makes arrays so powerful are the many useful methods
// attached to them. They make it easy to take a set of data and `sort` 
// or `filter` it. Of course, as neanderthals we are throwing all those 
// functions out the window.document and implementing them from scratch.

// Note that normally these functions are called directly on an array,
// i.e. `[1, 2, 3].pop()`, but since we are doing this manually, we'll 
// have to input the array as the first argument.



/**  POP  **/
// This removes the last element from an array and returns it. 
// Since this is your first array method, I'll do it for you.

// Example Usage:
// var array = [6, 7, 8];


// array.pop();    --> returns 8, and array now equals [6, 7]

var pop = function(array) {
  var popped = array[array.length - 1];

  if (array.length > 0) {
    array.length--;
  }

  return popped;
};



/**  PUSH  **/
// Just the opposite of `pop`, this adds new values to the end of an 
// array, and returns the new length. Normally it can accept any number 
// of values, but let's keep things simple for now and just do one.

// Example Usage:
// var array = [6, 7, 8];
// array.push(9);    --> returns 4, and array now equals [6, 7, 8, 9]

var push = function(array, value) {

   if (array.length>0){
    array.length++;
    array[array.length-1]=value;
   }

   return array.length;

};


/**  SHIFT  **/
// Removes the first element from an array and returns it.
// Beware! This won't be as simple as `pop`.

// Example Usage:
// var array = [6, 7, 8];
// array.shift();    --> returns 6, and array now equals [7, 8]

var shift = function(array) {
  var shifted = array[0];
  for(var i=0; i<array.length; i++){
    array[i]=array[i+1];
  }
  if (array.length > 0) {
    array.length--;
  }

  return shifted;
};







/**  UNSHIFT  **/
// You may sense a pattern. This one adds any number of values to the 
// start of an array. I let you off easy with push, but this time 
// you'll need to use `arguments` and handle them all.

// Example Usage:
// var array = [6, 7, 8];
// array.unshift(5);    --> returns 4, and array now equals [5, 6, 7, 8]
var list=[6,7,8];
var unshift = function (array){
  if (array.length>=0){
    array.length += list.length;
    return array.length;
  }
  for (var i =0; i<list.length; i++){
    array[array.length+1]=list[i];
  }
  return array;
  
};


/**  JOIN  **/
// Combines an array of sub-strings using a separator string inbetween 
// each. If no separator is provided, it should default to a comma.

// Example Usage:
// ["hello", "world"].join(" ");    --> returns "hello world"

var join = function(array, separator) {
  for (var i=0; i<array.length; i++){
    var string = array[i]+ separator;
    console.log(string);
   }
};


/**  REVERSE  **/
// Reverses an array in place as well as returning the mutated array. 
// To demonstrate reusing your functions, I've solved `reverse` in a
// bit of a odd way using your `push`... you got that working, right?

// Example Usage:
// var array = [3, 4, 5]
// array.reverse()    --> returns [5, 4, 3] and array now equals [5, 4, 3]

var reverse = function(array) {
  var reversed = [];
  for (var i = array.length - 1; i >= 0; i--) {
    if(reversed.length>=0){
      reversed.length++;
      reversed[reversed.length-1] =array[i];
    }
  }
  return reversed;
};


var reverse = function(array) {
  var reversed = [];

  for (var i = array.length - 1; i >= 0; i--) {
    push(reversed, array[i]);
  }

  for (var j = 0; j < array.length; j++) {
    array[j] = reversed[j];
  }

  return array;
};



/**  CONCAT  **/
// This "concatenates" any number of sub-arrays into a new larger array. 
// You may find previous functions useful here too!

// [1, 2].concat([3, 4], 5, [6])    --> returns [1, 2, 3, 4, 5, 6]









