const plain = "REYHAN";

const shift = 13;

const cipher = encryption(plain);
const decrypt = decryption(cipher);

console.log({cipher, decrypt})

function encryption(plainText=""){
    const arrPlain = plainText.split("");

    let cipher = "";
    arrPlain.map((arr)=>{
        let temp = mod((arr.charCodeAt()-65)+shift);
        cipher += String.fromCharCode(temp+65);
    });

    return cipher;
}

function decryption(cipherText=""){
    const arrCipher = cipherText.split("");

    let plainText = "";
    arrCipher.map((arr)=>{
        let temp = mod((arr.charCodeAt()-65)-shift);
        plainText += String.fromCharCode(temp+65);
    })
    return plainText;
}

function mod(number){
    return (number % 26 + 26) % 26;
}