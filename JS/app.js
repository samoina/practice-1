function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.slice();      //create newArr to avoid mutating arr2, and also to add arr1 items

  // newArr.splice(n, 0, ...arr1);     //use .splice() to change the new arr by adding contents of arr 1. Remember .splice(start, deleteCount, item1) --> index to start from (which is n), we are not deleting anything, so 0 and finally arr1. we use the spread syntax ... to add contents of the new array then return it

  //You may also loop through arr1, and for each element add at index n on the newarray
  for (let index = 0; index < arr1.length; index++) {
    newArr.splice(n, 0, arr1[index]);
  }
  return newArr;
}

console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));



//<-------celsius to Fahrenheit---------->
function convertToF(celsius) {
  let fahrenheit;
  fahrenheit = (celsius * 1.8) + 32
  return fahrenheit;
}

console.log(convertToF(20));

//<----------Reverse the string------------->
function reverseString(str) {
  let sentence = str
    .split("")
    .reverse()
    .join("")

  return sentence;
}

console.log(reverseString("Greetings from Earth"));

//<------------factorialize a number-------------->
function factorialize(num) {
  let digit = 1
  for (let index = 1; index <= num; index++) {
    digit = digit * index;
  }
  return digit;
}

console.log(factorialize(20));

//<----------Find length of longest word------------>
function findLongestWordLength(str) {
  let stringSent = str
    .split(" ")
    .sort(function(a,b) {
      return b.length-a.length
    })

  return stringSent[0].length;
}

console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));

//<---------Return largest number in arrays---------->
function largestOfFour(arr) {
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

