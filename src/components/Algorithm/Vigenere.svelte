<script>
    export let algoActive={};

    let 
        key = "KEY",
        encrypt = "",
        cipher = "",
        decrypt = "",
        plain = "";

    $: key = upperCase(key+"")
    $: cipher = encryption(encrypt, key+"")
    $: plain = decryption(decrypt, key+"")
    $: encrypt = upperCase(encrypt+"")
    
    function upperCase(text){
        return text.toUpperCase();
    }

    function mod(number){
        return (number % 26 + 26) % 26
    }

    function encryption(plain, key){
        let index = 0;
        let cipher = "";
        let arrPlain = plain.split("");
        let arrKey = [];
        if(key === ""){
            arrKey = [""]
        } else {
            arrKey = key.split("");
        }

        arrPlain.map((p)=>{
            if(index >= arrKey.length){
                index = 0;
            }
            let temp = mod((p.charCodeAt()-65+arrKey[index].charCodeAt()-65));
            cipher += String.fromCharCode(temp+65);
            // console.log(p,arrKey[index]);
            index++;
        })
        return cipher;
        // console.log({arrPlain, arrKey})
    }

    function decryption(cipher, key){
        let index = 0;
        let plain = "";

        let arrCipher = cipher.split("");
        let arrKey = [];
        if(key === ""){
            arrKey = [""]
        } else {
            arrKey = key.split("");
        }
        arrCipher.map((p)=>{
            if(index >= arrKey.length){
                index = 0;
            }
            let temp = mod((p.charCodeAt()-65-arrKey[index].charCodeAt()-65));
            // console.log(temp)
            plain += String.fromCharCode(temp+65);
            // console.log(p,arrKey[index]);
            index++;
        })

        return plain
    }

</script>


<div class="algoDetail mt-5 mb-5">
    <h3>{algoActive.name}</h3>
     <h6>
        Masukkan Key
    </h6>
    <div class="row mb-3">
        <div class="col-md-4">
            <input type="text" class="form-control" placeholder="Key ..." bind:value={key}>
        </div>
        <div class="col-md-4">
            <h6>Your Key : {key}</h6>
        </div>
    </div>
    <div class="row mb-5 mt-3">
        <div class="col-md-12">
            <h3 class="text-center">Proses Enkripsi</h3>
            <hr>
        </div>
        <div class="col-md-6 mb-3">
            <h5 class="text-center">Plain Text</h5>
            <h6 class="text-center">C=(Pi+Ki)(mod 26)</h6>
            <textarea name="" id="" bind:value={encrypt} cols="30" rows="3" class="form-control"></textarea>
        </div>
        <div class="col-md-6 mb-3">
            <h5 class="text-center">Cipher Text</h5>
            <h6 class="text-center">Hasil Enkripsi</h6>
            <textarea readonly bind:value={cipher} name="" id="" cols="30" rows="3" class="form-control"></textarea>
        </div>
    </div>
    <div class="row mb-3 mt-3">
        <div class="col-md-12">
            <h3 class="text-center">Proses Dekripsi</h3>
            <hr>
        </div>
        <div class="col-md-6 mb-3">
            <h5 class="text-center">Cipher Text</h5>
            <h6 class="text-center">P=(Pi-Ki)(mod 26)</h6>
            <textarea name="" id="" bind:value={decrypt} cols="30" rows="3" class="form-control"></textarea>
        </div>
        <div class="col-md-6 mb-3">
            <h5 class="text-center">Plain Text</h5>
            <h6 class="text-center">Hasil Dekripsi</h6>
            <textarea readonly bind:value={plain} name="" id="" cols="30" rows="3" class="form-control"></textarea>
        </div>
    </div>
</div>