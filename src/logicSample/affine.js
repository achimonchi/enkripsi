const plain = "kripto".toUpperCase();
const n = 26;
const m = 7;
const b = 10;

let encr = encrypt(plain);
let decr = decrypt(encr);

console.log({encr, decr, plain})
function split(text){
    return text.split("");
}

function encrypt(plain){
    let cipher = "";
    let arrPlain = split(plain);
    arrPlain.map((a)=>{
        let temp = mod(((a.charCodeAt()-65)*m + b)) ;
        let str = String.fromCharCode(temp+65);
        cipher += str;
    })

    return cipher;
    
}

function decrypt(cipher){
    let plainText = "";
    let arrCipher = split(cipher);
    
    let invers = getInvers(7);
    console.log(invers)
    arrCipher.map((c)=>{
        let first = mod((c.charCodeAt()-65-b)*invers);
        plainText += String.fromCharCode(first+65)
    })

    return plainText;
}

function mod(x){
    return (x % 26 + 26) % 26
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