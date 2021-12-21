function sum(a, b) {
    return a + b;
  }



function capitalize(string) {
    string = string.toLowerCase();
    let string2 = string.substring(1)
    return string.charAt(0).toUpperCase()+string2;
    
}

const capitalize1 = (string) => { // one liner
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const reverseString = (string) => {
  let reversed = [];
  let array = string.split("");
  for (let i=array.length; i>=0; i--){
    reversed.push(array[i-1])
  }
  return reversed.join("");
};

const calculator = {
  addition: (x,y) =>{return x+y},
  division: (x,y) => {return x/y},
  subtraction: (x,y) => {return x-y},
  multiplication: (x,y) => {return x*y}
}

function analyzeArray(array){
  let sum=0;
  array.forEach(element => {
    sum+=element
  });

  let sortedArray = array.sort(function(a, b) {
    return a - b;
  });

  let object = {
    average: sum/array.length,    
    min: sortedArray[0],
    max: sortedArray[sortedArray.length-1],
    length: array.length,
  }

  return object;
}

analyzeArray([2,3,4,5])
module.exports = { sum, capitalize, reverseString, calculator, analyzeArray } 

//MANUAL TESTING---------------
//console.log(calculator.multiplication(1,2))

//let x = capitalize("squareface")
//console.log(x)