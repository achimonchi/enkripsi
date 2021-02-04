const p = 47;
const q = 71;

const n = p*q;

const toutientN = (p-1)*(q-1);

const arrRelatifPrima = getRelativePrime(toutientN);
const e = arrRelatifPrima[9];
const d = getD(e, toutientN);

function getRelativePrime(toutientN){
    let relativePrime = [];
    if(isPrime(toutientN)){
        for(let i = 1; i<toutientN ; i++){
            relativePrime.push(i);
        }
    } else {
        for(let i=1; i<toutientN; i++){
            if( i === 1){
                relativePrime.push(i);
            } else {
                if(toutientN % i !== 0){
                    const prime = generatePrime(i);
                    let temp = true;
                    for(let j = 0; j< prime.length; j++){
                        if(i % prime[j] === 0){
                            temp = false;
                            break;
                        }
                    }
                    if(temp === true){
                        if(relativePrime.length < 20){
                            relativePrime.push(i);
                        } else {
                            break;
                        }
                    }
                }
            }
            
        };
        
    }
    return relativePrime;
}

function getD(e, toutientN){
    let i = 1;
    let flag = true;
    while(flag){
        if(mod(e*i, toutientN) === 1){
            console.log(i)
            flag = false;
        }else {
            i++;
        }
    }
    return i;
}

const text = "HELLO ALICE";
const arrAscii = convertToAsciiCode(text);
const arrBlock = convertTo4Block(arrAscii);
console.log({text, arrAscii, arrBlock})

function convertToAsciiCode(text){
    let arr = [];
    text = text.replace(" ","z");
    if(text.length % 2 !== 0){
        text += "Z";
    }
    text = text.toUpperCase();
    text.split("").map((t)=>{
        if(t!==" "){
            arr.push(t.charCodeAt()-65);
        }
    })
    return arr;
}

function convertTo4Block(arrText){
    let arrBlock = [];
    let length = arrText.length / 2;
    for(let i =0; i<length; i++){
        let index1 = arrText[i*2]+"";
        let index2 = arrText[i*2+1]+"";
        if(index1.length <2){
            index1 = "0"+index1;
        }
        if(index2.length <2){
            index2 = "0"+index2;
        }
        arrBlock.push([index1, index2]);
    }
    return arrBlock;
}

function encryption(arrBlock,e, n){
    let enc = [];
    arrBlock.map((block)=>{
        let textNumber = ""
        textNumber += block[0]+""+block[1];

        let number = parseInt(textNumber);
        let c = mod(Math.pow(number,e), n);
        enc.push(c);
    });
    console.log({enc})
    return enc;
}

function decryption(encrypt, d, n){
    let dec = [];
    console.log({encrypt});
    encrypt.map((enc)=>{
        console.log(BigInt(Math.pow(enc,d)))
        // let number = mod(Math.pow(enc, d), n);
        // console.log({enc, number,d})
    })
}

const encrypt = encryption(arrBlock,e, n);
const decrypt = decryption(encrypt, d, n);

function mod(x, m){
    return (x % m + m) % m
}

function generatePrime(maxNumber){
    let prime=[];
    for(let i=2; i<maxNumber; i++){
        if(isPrime(i)){
            prime.push(i);
        }
    }
    return prime;
}


function isPrime(number){
    let count =0;
    for(let i=1; i<number; i++){
        if(number%i === 0)
            count++;
    }

    if(count>1){
        return false;
    } else {
        return true;
    }
}

