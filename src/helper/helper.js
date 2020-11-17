function upperCase(string){
    string = string.replace(/[^\w\s]/gi, '');
    string = string.replace(/\d/g,'');
    string = removeSpace(string);
    console.log(string)
    return string.toUpperCase();
}

function removeSpace(string=""){
    return string.split(" ").join("");
}

function mod(number){
    return (number%26 + 26)%26;
}

module.exports = {upperCase, mod}