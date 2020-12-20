const start = 65;
const end = 90;
const selisih = end - start;

const string = "MNZ";
const strSplit = string.split("");

let strArr = [];

let alphabet = "";

for(let i=0; i<=selisih; i++){
    alphabet += String.fromCharCode(i+start);
}
console.log(alphabet)

strSplit.map((str)=>{
    let stringCharCode = str.charCodeAt();
    let count = 0;
    let tempStr = "";
    for(let i = 0; i<=selisih; i++){
        let s = i+stringCharCode;
        if(s>end){
            s = start + count;
            count++;
        }
        tempStr += String.fromCharCode(s);
    }
    strArr.push(tempStr);
})

console.log(strArr);

// const router = {
//     r1 : str.split("")
// }
// console.log(router)