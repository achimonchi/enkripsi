const p = 47;
const q = 71;

const n = p*q;

const toutientN = (p-1)*(q-1);

const arrRelatifPrima = [];

if(isPrime(toutientN)){
    
} else {
    for(let i=1; i<toutientN; i++){
        if(toutientN % 2 !== 0){
            
        } else {
            if(toutientN % i !== 0){
                if(isPrime(i)){
                    
                }
            }
        }
    };
}



function isPrime(number){
    let count =0;
    for(let i=2; i<number; i++){
        if(number%i === 0)
            count++;
    }

    if(count>1){
        return false;
    } else {
        return true;
    }
}

