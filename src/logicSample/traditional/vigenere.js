let alphabet = [];

for(let i =0; i<26; i++){
    alphabet.push(String.fromCharCode(i+65));
}

let key = "PIZZA";
let plain = "serbuberlin".toUpperCase();

let arrKey = key.split("");

const encrypt = encryption(plain);
const decrypt = decryption(encrypt);
console.log({encrypt, decrypt})


function mod(number){
    return (number % 26 + 26) % 26
}

function encryption(plain){
    let index = 0;
    let cipher = "";
    
    let arrPlain = plain.split("");
    arrPlain.map((p)=>{
        if(index >= arrKey.length){
            index = 0;
        }
        let temp = mod((p.charCodeAt()-65+arrKey[index].charCodeAt()-65));
        cipher += String.fromCharCode(temp+65);
        index++;
    })

    return cipher
}

function decryption(cipher){
    let index = 0;
    let plain = "";

    let arrCipher = cipher.split("");
    arrCipher.map((p)=>{
        if(index >= arrKey.length){
            index = 0;
        }
        let temp = mod((p.charCodeAt()-65-arrKey[index].charCodeAt()-65));
        // console.log(temp)
        plain += String.fromCharCode(temp+65);
        // console.log(p,arrKey[index]);
        index++;
    })

    return plain
}
