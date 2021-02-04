export function getRelativePrime(toutientN){
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
                        if(relativePrime.length < 10){
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

export function getD(e, toutientN){
    console.log({e,toutientN})
    let i = 1;
    let flag = true;
    while(flag){
        if(mod(e*i, toutientN) === 1){
            console.log(i)
            break;
        }else {
            i++;
        }
    }
    console.log(i)
    return i;
}

export function convertToAsciiCode(text){
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

export function convertTo4Block(arrText){
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

export function encryption(arrBlock,e, n){
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

export function decryption(encrypt, d, n){
    let dec = [];
    console.log({encrypt});
    encrypt.map((enc)=>{
        console.log(BigInt(Math.pow(enc,d)))
        // let number = mod(Math.pow(enc, d), n);
        // console.log({enc, number,d})
    })
}

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

