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
        // console.log(temp.trim(" ").split(" ").join("").length)
        key2binary.push(temp.trim(" "));
    })

    return key2binary;
}