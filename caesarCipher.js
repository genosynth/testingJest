module.exports = (num,string) =>{
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    alphabet = alphabet.split('');
    let result = [];
    let others = "0123456789!£$%^&*()_-+{}@~#'[]/?;:.>,< ";
    others = others.split('');

    for (let i=0; i<string.length; i++){
        alphabet.forEach((letter)=>{
            if (string[i].toLowerCase()==letter.toLowerCase()){
                
                let workingNum = alphabet.indexOf(letter)+num
                if (workingNum>25){
                    workingNum = workingNum-26;
                    result.push(alphabet[workingNum])
                } else {result.push(alphabet[workingNum])}
                
            }           
            
        })

        for (let x=0; x<others.length; x++){
            if (string[i].includes(others[x])){
                result.push(string[i]);
            }
        }
    }

  

    let stringArray = string.split("");
    stringArray.forEach((letter, index)=>{
    
        if (letter.toUpperCase()==letter && letter.toLowerCase()!=letter){
            //let y = stringArray[index]
            //console.log(result[index]);
            let capitalized = result[index].toUpperCase();
            
            result.splice(index, 1, capitalized)
        }
      
    })
    result = result.join('');


    return result;

}



function cy(num,string){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    alphabet = alphabet.split('');
    let result = [];
    let others = "0123456789!£$%^&*()_-+{}@~#'[]/?;:.>,< ";
    others = others.split('');

    for (let i=0; i<string.length; i++){
        alphabet.forEach((letter)=>{
            if (string[i]==letter){
                
                let workingNum = alphabet.indexOf(letter)+num
                if (workingNum>25){
                    workingNum = workingNum-26;
                    result.push(alphabet[workingNum])
                } else {result.push(alphabet[workingNum])}
                
            }           
            
        })

        for (let x=0; x<others.length; x++){
            if (string[i].includes(others[x])){
                result.push(string[i]);
            }
        }
    }

    let stringArray = string.split("");
    stringArray.forEach((letter, index)=>{
    
        if (letter.toUpperCase()==letter && letter.toLowerCase()!=letter){
            let y = result[index];
            //console.log(result[index].toUpperCase());
            let capitalized = result[index].toUpperCase();
            console.log(capitalized)
            result.splice(index, 0, capitalized)
        }
      
    })
    result = result.join('');


    return result;

}

console.log(cy(1,"Aa-z c/ a,"));

