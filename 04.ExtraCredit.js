/* * * * * * * * * * * * * * * * * * * * * *
 *      PALEO JS PT 4: EXTRA CREDIT        *
 * * * * * * * * * * * * * * * * * * * * * */

// Looking for more useful JavaScript tools to implement? These are  
// harder than the ones that came before, but I know you can do it.



/**  SPLICE  **/
// Modifies an array by removing a number of elements and 
// inserting any number of new ones.

// Example Usage:
// var arr = [7, 8, 9];
// arr.splice(2, 1, 14, 16);    --> returns [9] and arr now equals [7, 8, 14, 16]

var splice = function(array, start, count) {
	start = array[arguments[0]];
	var newArr = [];
	newArr[0]=start;
	for (var i=start;i<count; i++){
		newArr += array[i];
		return newArr;
	}



};


/**  SPLIT  **/
// The opposite of `join`, returns an array by breaking up a string 
// using a separator. The separators are not included in the array.

// Example Usage:
// "hello world".split(" ");    --> returns ["hello", "world"]

var split = function(string, separator) {
	var array=[];
	for(var i =0; i<string.length; i++) {
		if(string[i]===separator){
			var tempString = "";
			for(var j=0; j<i; j++){
				tempString += string[j];
			}
			array[0]= tempString;
			tempString="";
			for (var j=i; j<string.length;j++){
				tempString += string[j];
			}
			array[1]=tempString;
		}
	}
	return array;
};


/**  MATH.SQRT  **/
// How *do* you find the square root of a number if you don't have `Math`?

// Example Usage:
// Math.sqrt(4);    --> returns 2

var sqrt = function(number) {

};


/**  DATE.PARSE  **/
// A little function that takes a date string in a variety of formats and 
// returns the number of milliseconds since midnight UTC January 1, 1970.
// Note that while the native version sometimes defaults to your local 
// time zone, the paleo version is expected to always default to UTC.

// Example Usage:
// Date.parse("December 12, 1990");    --> returns 660960000000

var parse = function(date) {

};
