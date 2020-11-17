<script>
    export let algoActive = {};
    import {upperCase, mod} from './../../helper/helper'
    
    let encrypt="";
    let decrypt="";
    let plain = "";
    
    let primes = [3,5,7,11,13,15,17,23];
    let m = primes[0];
    let b = 0;

    function split(text){
        // console.log(text.split(""))
        return text.split("");
    }

    function getInvers(number){
        let flag = true;
        let invers = 0;
        
        if(number === 0){
            invers = 0;
        } else {
            while(flag){
                invers++;
                let temp = mod(invers*number);
                if(temp === 1){
                    flag = false
                }
            }
        }

        return invers;
    }

    $: cipher = handleEncrypt(encrypt, b, m);
    $: encrypt = upperCase(encrypt+"");
    $: decrypt = upperCase(decrypt+"");
    $: plain = handleDecrypt(decrypt, b, m);

    const handleEncrypt=(encrypt,b ,m)=>{
        let cipher = "";
        let arrPlain = split(encrypt+"");
        arrPlain.map((a)=>{
            let temp = mod(((a.charCodeAt()-65)*m + b)) ;
            let str = String.fromCharCode(temp+65);
            cipher += str;
        })
        return cipher;
    }

    const handleDecrypt=(decrypt, b, m)=>{
        let plainText = "";
        let arrCipher = split(decrypt+"");
        console.log(decrypt, b, m)
        let invers = getInvers(m);
        arrCipher.map((c)=>{
            let first = mod((c.charCodeAt()-65-b)*invers);
            plainText += String.fromCharCode(first+65)
        })

        return plainText;
    }
    

    
</script>

<div class="algoDetail mt-5 mb-5">
    <h3>{algoActive.name}</h3>
    <div class="row mb-3 mt-3">
        <div class="col-md-2">
            <label for="">m</label>
            <select name="" id="" class="form-control" bind:value={m}>
                {#each primes as prime}
                    <option value={prime}>{prime}</option>
                {/each}
            </select>
        </div>
        <div class="col-md-2">
            <label for="">b</label>
            <input type="number" bind:value={b} min=0 class="form-control" placeholder="Insert b ...">
        </div>
    </div>
    <div class="row mb-5">
        <div class="col-md-12">
            <h3 class="text-center">Proses Enkripsi</h3>
            <hr>
        </div>
        <div class="col-md-6 mb-3">
            <h5 class="text-center">Plain Text</h5>
            <h6 class="text-center">C = ( P*m + b )(mod 26)</h6>
            <textarea name="" id="" cols="30" rows="3" class="form-control" bind:value={encrypt}></textarea>
        </div>
        <div class="col-md-6 mb-3">
            <h5 class="text-center">Cipher</h5>
            <h6 class="text-center">Hasil Enkripsi</h6>
            <textarea readonly name="" id="" cols="30" rows="3" class="form-control" bind:value={cipher}></textarea>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <h3 class="text-center">Proses Dekripsi</h3>
            <hr>
        </div>
        <div class="col-md-6 mb-3">
            <h5 class="text-center">Cipher Text</h5>
            <h6 class="text-center">P = invers(m)*(C-b) (mod 26)</h6>
            <textarea name="" id="" cols="30" rows="3" class="form-control" bind:value={decrypt}></textarea>
        </div>
        <div class="col-md-6 mb-3">
            <h5 class="text-center">Plain Text</h5>
            <h6 class="text-center">Hasil Dekripsi</h6>
            <textarea readonly name="" id="" cols="30" rows="3" class="form-control" bind:value={plain}></textarea>
        </div>
    </div>
</div>

<style>
    /* .algoDetail{
        box-shadow: 0 5px 10px -5px rgba(0,0,0,.1);
        background: #fff;
        padding:20px;
    } */
</style>