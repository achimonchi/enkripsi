// 3 proses utama


// 1. proses pembentukan kunci
/*
    jumlah kunci = 256 bit = 32 karakter
    jika karakter yang diinput < 32 karakter, maka teks akan diulang hingga memenuhi sebanyak 32 karakter.
    256 bit diubah menjadi 8 kelompok => 8 bit / kelompok

    256 = 32
    32  = 4
*/

const key = "Algoritma_GOST_Taroni_Zebua_2017";
const plain = "Reyhan Jovie";

// generate key.
// check if key less than 32, equal 32, or greather than 32.
// this function will return the exact key that we'll use.
const generateKey = (key) =>{
    if(key.length < 32){
        // set key to be an array
        const temp = key.split("");
        // define maximum of key length
        const max = 32;
        // define pointer
        let point = 0;
        let tempKey = [];
        for(let i=0; i<max; i++){
            if(point === temp.length){
                point = 0;
            }
            tempKey.push(temp[point]);
            point++;
        }

        // turn back from arrString to string
        return tempKey.join("");
    } else if(key.length > 32){
        // cut the key
        return key.slice(0,32);
    } else {
        return key;
    }
}

const generate8Group=(key)=>{
    let arrOutput = [];
    const group = 8;
    const max = 4

    for(let i=0; i<group; i++){
        arrOutput[i] = key.slice(i*max,(max*i)+max)
    }
    return arrOutput;
}


const generateBinary=(arrKey)=>{
    const key2binary = [];
    arrKey.map((key)=>{
        const arrK = key.split("");
        let temp = "";
        for(let i=0; i<arrK.length; i++){
            let charCode = arrK[i].charCodeAt(0).toString(2);
            let tempChar = charCode.split("");
            let string = charCode;
            let len = 8 - charCode.length;
            if(len > 0){
                for(let i=0; i<len; i++){
                    tempChar = ["0", ...tempChar]
                }

                string = tempChar.join("");
            }

            temp += string+" ";
        }

        key2binary.push(temp.trim(" "));
    })

    return key2binary;
}

const genKey = generateKey(key);
const arrKey = generate8Group(genKey);
const key2binary = generateBinary(arrKey);

console.log({key, genKey, arrKey, key2binary})





// 2. proses enkripsi

// 3. proses dekripsi