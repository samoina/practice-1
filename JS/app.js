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
    .sort(function (a, b) {
      return b.length - a.length
    })

  return stringSent[0];
}

console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));

//<---------Return largest number in arrays---------->
function largestOfFour(arr) {
  let sortArr = [];
  // for (let index = 0; index < arr.length; index++) {
  //   arr[index].sort(function (a, b) {
  //     return b - a
  //   })
  //   sortArr.push(arr[index][0]);
  // }
  // arr.map(function(numbArr){
  //   numbArr.sort(function(a,b) {
  //     return b-a
  //   })
  //   sortArr.push(numbArr[0]);
  // })
  for (let index = 0; index < arr.length; index++) {
    arr[index].sort(function (a, b) {
      return b - a
    })
    sortArr.push(arr[index][0]);
  }
  return sortArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// <----------Confirm the Ending-------->
function confirmEnding(str, target) {
//find length of target, slice string to -ve that length, then compare the two and if they are same, return true
  let tarLength = target.length;
  console.log(tarLength);

  let checkStr = str.slice(-(tarLength));

  if (checkStr === target) {
    return true
  } else {
    return false
  }
}

console.log(confirmEnding("Abstraction", "action"));


//<------------Repeat a String Repeat a String---------->
function repeatStringNumTimes(str, num) {
  let strHolder="";
  for (let index = 0; index <num; index++) {
    strHolder= strHolder+str;
  }
  return strHolder
}

console.log(repeatStringNumTimes("abc", 4));


//<-----------Truncate a String----------->
function truncateString(str, num) {
  let truncString = "";
  if (str.length>num) {
    truncString=str.slice(0, num).concat("...");
    return truncString;
  } else {
    return str
  }  
}

console.log(truncateString("Absolutely Longer", 2));



//<----------Finders Keepers------------>
function findElement(arr) {


