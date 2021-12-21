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


module.exports = { sum, capitalize, reverseString, calculator } 

//MANUAL TESTING---------------
//console.log(calculator.multiplication(1,2))

//let x = capitalize("squareface")
//console.log(x)