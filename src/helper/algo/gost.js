export const generateKey = (key) =>{
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

export const generate8Group=(key)=>{
    let arrOutput = [];
    const group = 8;
    const max = 4

    for(let i=0; i<group; i++){
        arrOutput[i] = key.slice(i*max,(max*i)+max)
    }
    return arrOutput;
}

export const generateBinary=(arrKey)=>{
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
        const stringTemp = temp.trim(" ").split(" ").join("").split("").reverse().join("");
        const len = Math.ceil(stringTemp.length / 4);
        let str = "";
        for(let i=0; i<4; i++){
            str += stringTemp.slice(i*len,(len*i)+len) + " ";
        }
        // console.log({temp: stringTemp, len, str});
        // console.log(temp.trim(" ").split(" ").join("").length)
        key2binary.push(str);
    })

    return key2binary;
}

export const divPlainTo2Group = (plain="") => {
    const len = Math.ceil(plain.length / 2);
    const arrPlain = plain.split("");
    let temp = [];
    let count = 0;
    for(let i=0; i<2; i++){
        let stringCode = "";
        for(let j=0; j<len; j++){
            let charCode = arrPlain[count].charCodeAt(0).toString(2);
            let tempChar = charCode.split("");
            let string = charCode;
            let len = 8 - charCode.length;
            if(len > 0){
                for(let i=0; i<len; i++){
                    tempChar = ["0", ...tempChar]
                }
                
                string = tempChar.join("");
            }
            
            stringCode += string +" ";
            // console.log({stringCode, arrPlain:arrPlain[count]})
            count++
        }
        temp[i] = stringCode.trim(" ");
    }
    // console.log({temp})
    return temp;    

}

export const splitArr=(binary)=>{
    let output = [];
    binary.map((t,i)=>{
        let string = [];
        let group = 4;
        let max = 8;
        for(let j=0; j<group; j++){
            string[j] = t.slice(j*max, (max*j)+max)
        }
        output[i] = string.join(" ");
    })
    return output;
}

export const reverseBinary = (binary) =>{
    let temp = [];
    
    binary.map((b,i)=>{
        temp[i] = b.split(" ").join("").split("").reverse().join("");
    })

    
    
    let output = splitArr(temp);

    return output;
}



export const createBinary=(decimal)=>{
    if(decimal.length < 32){
        const len = 32 - decimal.length;
        let binary = decimal.toString(2).split("");
        for(let i=0; i<len; i++){
            binary = ["0", ...binary]
        }
        return binary.join("");
    } else {
        return decimal.toString(2);
    }
}

export const changeToSBOX=(binary)=>{
    const sbox = [
        [4,10,9,2,13,8,0,14,6,11,1,12,7,15,5,3],
        [14,11,4,12,6,13,15,10,2,3,8,1,0,7,5,9],
        [5,8,1,13,10,3,4,2,14,15,12,7,6,0,9,11],
        [7,13,10,1,0,8,9,15,14,4,6,12,11,2,5,3],
        [6,12,7,1,5,15,13,8,4,10,9,14,0,3,11,2],
        [4,11,10,0,7,2,1,13,3,6,8,5,9,12,15,14],
        [13,11,4,1,3,15,5,9,0,10,14,7,6,8,2,12],
        [1,15,13,0,5,7,10,4,9,2,3,14,6,11,8,12],
    ]

    let stringDec = "";
    let arrString = [];
    let sb = "";
    sbox.map((s,i)=>{
        sb = s[parseInt(binary[i],2)]
        stringDec += sb +" "
        let len = 4 - sb.toString(2).length;
        let str = sb.toString(2).split("");
        if(len > 0){
            for(let j =0; j< len; j++){
                str = ["0", ...str]
            }
        }
        arrString[i] = str.join("");
        // console.log({binary : binary[i], decimal : parseInt(binary[i],2), sb})
    })
    // console.log({stringDec, arrString, sb})
    return arrString;
}

export const processRLS = (binary)=>{
    let stringBiner = binary.join("").toString();
    let sliceBiner = stringBiner.slice(0,11);
    let tempBiner = stringBiner.slice(11,32) + sliceBiner;
    return tempBiner;
}

export const xor = (a,b)=>{
    if(a !== b) return "1";
    else return "0";
}

export const printValue = (arr=[])=>{
    const string = arr.reverse().join(" ");
    let value = "";
    string.split(" ").map((s)=>{
        value += String.fromCharCode(parseInt(s, 2))
        // console.log({text :String.fromCodePoint(parseInt(s, 2)), decimal : parseInt(s, 2)})
        console.log() //01110101 00101100 0001
    })
    return value;
}

export const encryption=(reverseBinaryParam=[], key2binary=[])=>{
    let temp=[];
    let tempBinary = [...reverseBinaryParam];
    let index=0;
    let rls = "";
    
    for(let i=0; i<32; i++){
        // console.log("PROCES KE "+i);
        // console.log("L"+i+" dan R"+i+" yang digunakan :")
        // console.log("=========================================")
        // console.log({r0: tempBinary[0], l0:tempBinary[1]})
        // console.log("=========================================")
        let key, group, sbox;
        if(i>23){
            if(i%8===0){
                index = 7;
            }
            let sum = parseInt(tempBinary[0].split(" ").join(""), 2) + parseInt(key2binary[index].split(" ").join(""),2);
            let modResult = mod(sum);
            // console.log(modResult.toString(2))
            key = createBinary(modResult.toString(2))
            group = generate8Group(key);
            sbox = changeToSBOX(group);
            rls = processRLS(sbox);
            // console.log("================ PROCESS KE "+i+" INDEX KUNCI "+index+" ================")
            // console.log({sbox, group, rls, key:parseInt(key2binary[index].split(" ").join(""),2), r:parseInt(tempBinary[0].split(" ").join(""), 2)});
            temp[i] = rls;
            index --;
        } else {
            if(i%8 ===0){
                index = 0;
            }    
            let sum = parseInt(tempBinary[0].split(" ").join(""), 2) + parseInt(key2binary[index].split(" ").join(""),2);
            let modResult = mod(sum)
            // console.log(modResult.toString(2))
            key = createBinary(modResult.toString(2))
            group = generate8Group(key);
            sbox = changeToSBOX(group);
            rls = processRLS(sbox);
            temp[i] = rls;
            index++;
        }

        let lTemp = tempBinary[1].split(" ").join("");
        let len = rls.length;
        let newR = "";
        for(let i=0; i<len; i++){
            newR += xor(rls.slice(i,i+1), lTemp.slice(i,i+1) );
        }
        let tempAll = tempBinary[0].split(" ").join("");
        tempBinary[0] = newR;
        tempBinary[1] = tempAll;
        
        // console.log({sbox, group, rls, r:tempBinary[0], l:lTemp, newR, newTemp : tempBinary});    


    }

    let output = splitArr(tempBinary);
    let reverse = reverseBinary(output)
    // console.log({output, reverse});
    let value = printValue(reverse);
    return value;
}

export const decryption=(reverseBinaryParam=[], key2binary=[])=>{
    let temp=[];
    let tempBinary = [...reverseBinaryParam];
    let index=0;
    let rls = "";
    
    for(let i=0; i<32; i++){
        // console.log("PROCES KE "+i);
        // console.log("L"+i+" dan R"+i+" yang digunakan :")
        // console.log("=========================================")
        // console.log({r0: tempBinary[0], l0:tempBinary[1]})
        // console.log("=========================================")
        let key, group, sbox;
        if(i>7){
            if(i%8===0){
                index = 7;
            }
            let sum = parseInt(tempBinary[0].split(" ").join(""), 2) + parseInt(key2binary[index].split(" ").join(""),2);
            let modResult = mod(sum);
            // console.log(modResult.toString(2))
            key = createBinary(modResult.toString(2))
            group = generate8Group(key);
            sbox = changeToSBOX(group);
            rls = processRLS(sbox);
            // console.log("================ PROCESS KE "+i+" INDEX KUNCI "+index+" ================")
            // console.log({sbox, group, rls, key:parseInt(key2binary[index].split(" ").join(""),2), r:parseInt(tempBinary[0].split(" ").join(""), 2)});
            temp[i] = rls;
            index --;
        } else {
            if(i%8 ===0){
                index = 0;
            }    
            let sum = parseInt(tempBinary[0].split(" ").join(""), 2) + parseInt(key2binary[index].split(" ").join(""),2);
            let modResult = mod(sum)
            // console.log(modResult.toString(2))
            key = createBinary(modResult.toString(2))
            group = generate8Group(key);
            sbox = changeToSBOX(group);
            rls = processRLS(sbox);
            temp[i] = rls;
            index++;
        }

        let lTemp = tempBinary[1].split(" ").join("");
        let len = rls.length;
        let newR = "";
        for(let i=0; i<len; i++){
            newR += xor(rls.slice(i,i+1), lTemp.slice(i,i+1) );
        }
        let tempAll = tempBinary[0].split(" ").join("");
        tempBinary[0] = newR;
        tempBinary[1] = tempAll;
        
        // console.log({sbox, group, rls, r:tempBinary[0], l:lTemp, newR, newTemp : tempBinary});    


    }

    let output = splitArr(tempBinary);
    let reverse = reverseBinary(output)
    // console.log({output, reverse});
    let value = printValue(reverse);
    return value;
}


function mod(x, m=0){
    const pow = m==0? Math.pow(2,32) : m;
    return (x % pow + pow) % pow
}