const key = "FIRD";
const m = 2;

const plain = "NOOBEE";
const {inv, matrix , det} = require('mathjs')

const ecnrypt = encryption(plain)
const decrypt = decryption(ecnrypt);
console.log(ecnrypt)

// console.log(" ".charCodeAt()-65)

function encryption(plain){
    let ordo = checkOrdo(key, m);
    let determinant = checkInvers(key, m);
    // console.log({ordo, determinant})
    if(ordo === false || determinant.isDeterminant === false){
        let string = "";
        if(ordo === false){
            string += "Ordo Harus Sama \n";
        }

        if(determinant.isDeterminant === false){
            string += "Harus mempunyai determinant \n";
        }
        console.log(string)
    }
    else{
        let tempPlain = plain.split(" ").join("").split("");
        if(tempPlain.length % m === 0){
            return prosesEncrypt(tempPlain)
        } else {
            let minus = m - tempPlain.length % m;
            let temp = [...tempPlain];
            while(minus>0){
                temp = [...temp, "Z"];
                minus--;
            }
            return prosesEncrypt(temp)
        }
    }
}

function splitWithMatriks(arrText){
    let count = parseInt(m);
    
    let string = "";
    let temp = [];
    for(let i=1; i<=arrText.length; i++){
        string += arrText[i-1];
        if(i%count===0){
            temp=[...temp, string];
            string = ""
        }
    }
    return temp;
}

function decryption(encrypt){
    let ordo = checkOrdo(key, m);
    let determinant = checkInvers(key, m);
    if(ordo === false || determinant.isDeterminant === false){
        let string = "";
        if(ordo === false){
            string += "Ordo Harus Sama \n";
        }

        if(determinant.isDeterminant === false){
            string += "Harus mempunyai determinant \n";
        }
        console.log(string)
    } else {
        let tempEncrypt = encrypt.split(" ").join("").split("");
        processDecrypt(tempEncrypt);
    }
}



function prosesEncrypt(arrPlain){

    let newArr = splitWithMatriks(arrPlain);
    let arrKey = key.split("");
    let newArrKey = splitWithMatriks(arrKey);
    let arrTemp = [];
    newArr.map((n,i)=>{
        newArrKey.map((ar,j)=>{
            let string = "";
            ar.split("").map((a,k)=>{
                let subs =n.substring(k,k+1); 
                string += subs + a;
                
                string += "+"
                
                // console.log({main : n.substring(k,k+1), key : a})
            })
            arrTemp = [...arrTemp, string];
        })
    })

    let cipher = "";

    arrTemp.map((ar)=>{
        let sum = 0;
        let array = ar.split("+");
        
        array.map((a,i)=>{
            if(i<array.length-1){
                let multiply = 1;
                a.split("").map((char,i)=>{
                    multiply *= char.charCodeAt()-65;
                    // console.log({char,i, charCode : char.charCodeAt()-65})
                })
                sum += multiply
            }
            
        })
        cipher += String.fromCharCode(mod(sum)+65)
    });
    return cipher;

    // console.log({newArr, newArrKey, arrPlain,arrKey, arrTemp})
}

function processDecrypt(arrDecrypt){
    
    let newDec = splitWithMatriks(arrDecrypt);
    let arrKey = key.split("");
    let newArrKey = splitWithMatriks(arrKey);

    // change arrKey to charCode
    let arrKeyChar = [];
    newArrKey.map((nArr)=>{
        let temp = [];
        nArr.split("").map((a)=>{
            temp.push(a.charCodeAt()-65);
        })

        arrKeyChar.push(temp)
    });

    // get determinant matriks from arrKeyChar
    let determinant = getInvers(det(arrKeyChar))

    // change potition arrayKey
    

    let arrTemp = [];
    newDec.map((n,i)=>{
        newArrKey.map((ar,j)=>{
            let string = "";
            ar.split("").map((a,k)=>{
                let subs =n.substring(k,k+1); 
                string += subs + a;
                
                string += "+"
                
                // console.log({main : n.substring(k,k+1), key : a})
            })
            arrTemp = [...arrTemp, string];
        })
    })
    console.log({arrDecrypt, newDec, newArrKey, arrTemp, arrKeyChar, determinant})
}


function multiply(number){
    return parseInt(number) * parseInt(number);
}

function checkOrdo(key, matriks){
    let arrKey = key.split("");
    let matriksCells = multiply(matriks);

    let isSimetri = checkSimetri(arrKey, matriksCells);
    return isSimetri
}

function checkSimetri(arrKey=[], matriksCells){
    return arrKey.length === matriksCells;
}

function checkInvers(arrKey, matriksCells){
    let arr = arrKey.split("");
    let arrNew = splitWithMatriks(arr);

    let arrKey2=[];
    arrNew.map((ar)=>{
        let temp = [];
        ar.split("").map((a)=>{
            temp.push(a.charCodeAt()-65)
        });
        arrKey2.push(temp)
    })
    let determinant = det(arrKey2);
    return {isDeteterminant : determinant !== 0, determinant:determinant};
    
}

function getInvers(number){
    let flag = true;
    let invers = 0;
    
    if(number === 0){
        invers = 0;
    } else {
        while(flag){
            invers++;
            let temp = mod(invers*number);
            if(temp === 1){
                flag = false
            }
        }
    } 

    return invers;
}

function mod(number){
    return (number % 26 + 26) % 26;
}