const p = 47;
const q = 71;

const n = p*q;

const toutientN = (p-1)*(q-1);

const arrRelatifPrima = getRelativePrime(toutientN);
const e = arrRelatifPrima[18];

function getD(){
    let i = 1;
    let flag = true;
    while(flag){
        if(mod(e*i, toutientN) === 1){
            console.log(i)
            flag = false;
        }
        i++;
        // console.log(mod(21,20));
    }
}

getD();


function getRelativePrime(toutientN){
    let relativePrime = [];
    if(isPrime(toutientN)){
        for(let i = 1; i<toutientN - 1; i++){
            relativePrime.push(i);
        }
    } else {
        if(toutientN % 2 === 0 ){
            for(let i = 1; i<toutientN; i++){
                if(i == 1){
                    relativePrime.push(i);
                }else if(toutientN % i !== 0){
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
        }
        else {
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
    }
    return relativePrime;
}

function mod(x, m=0){
    const pow = m==0? Math.pow(2,32) : m;
    return (x % pow + pow) % pow
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

