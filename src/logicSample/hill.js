const key = "SAYA";
const m = 2;

const plain = "NOOBE";

encryption(plain)
// console.log(" ".charCodeAt()-65)

function encryption(plain){
    let ordo = checkOrdo(key, m);
    if(ordo){
        let tempPlain = plain.split(" ").join("").split("");
        if(tempPlain.length % m === 0){
            prosesEncrypt(tempPlain)
        } else {
            let minus = m - tempPlain.length % m;
            let temp = [...tempPlain];
            while(minus>0){
                temp = [...temp, "Z"];
                minus--;
            }
            prosesEncrypt(temp)
        }
    } else {
        console.log("ORDO SALAH")
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

function prosesEncrypt(arrPlain){

    let newArr = splitWithMatriks(arrPlain);
    let arrKey = key.split("");
    let newArrKey = splitWithMatriks(arrKey);

    let c = 0;

    newArr.map((key,i)=>{
        if(c===m){
            c = 0;
        }
        let newKey = newArrKey[c].split("");
        let count = 0;
        let string = "";
        
        let sum = 1;

        newKey.map((k,i)=>{
            if(count==1){
                string += "+"
            }
            string+=k;
            string += arrPlain[i]
            count++;
        });
        c++;
        console.log(string)
    })
    console.log({newArr, newArrKey, arrPlain})
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