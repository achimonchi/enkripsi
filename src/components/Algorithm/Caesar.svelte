<script>
    export let algoActive = {};

    let 
        shift = 3,
        encrypt="",
        decrypt="",
        cipher="",
        plain="";

    import {upperCase, mod} from './../../helper/helper'

    $: cipher = encryption(encrypt,shift);
    $: plain = decryption(decrypt, shift);
    $: encrypt = upperCase(encrypt);
    $: decrypt = upperCase(decrypt);

    function encryption(plainText="", shift){
        const arrPlain = plainText.split("");

        let cipherText = "";
        arrPlain.map((arr)=>{
            let temp = mod((arr.charCodeAt()-65)+shift);
            cipherText += String.fromCharCode(temp+65);
        });
        return cipherText;
    }

    function decryption(cipherText="", shift){
        const arrCipher = cipherText.split("");

        let plainText = "";
        arrCipher.map((arr)=>{
            let temp = mod((arr.charCodeAt()-65)-shift);
            plainText += String.fromCharCode(temp+65);
        })
        return plainText;
    }
</script>


<div class="algoDetail mt-5 mb-5">
    <h3>{algoActive.name}</h3>
    <h6>Pilih Shift Kunci</h6>
    <div class="row mb-3 mt-3">
        <div class="col-md-4">
            <input type="number" bind:value={shift} min="0" max="26" placeholder="Pilih shift yang digunakan" class="form-control">
        </div>
        <div class="col-md-4">
            <h6>Shift anda : {shift} </h6>
        </div>
    </div>
    <div class="row mb-5">
        <div class="col-md-12">
            <h3 class="text-center">Proses Enkripsi</h3>
            <hr>
        </div>
        <div class="col-md-6">
            <h5 class="text-center">Plain Text</h5>
            <h6 class="text-center">C=(Pi+K)(mod 26)</h6>
            <textarea bind:value={encrypt} name="" id="" cols="30" rows="3" class="form-control"></textarea>
        </div>
        <div class="col-md-6">
            <h5 class="text-center">Cipher Text</h5>
            <h6 class="text-center">Hasil Enkripsi</h6>
            <textarea readonly bind:value={cipher} name="" id="" cols="30" rows="3" class="form-control"></textarea>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">
            <h3 class="text-center">Proses Dekripsi</h3>
            <hr>
        </div>
        <div class="col-md-6">
            <h5 class="text-center">Cipher Text</h5>
            <h6 class="text-center">C=(Pi+K)(mod 26)</h6>
            <textarea bind:value={decrypt} name="" id="" cols="30" rows="3" class="form-control"></textarea>
        </div>
        <div class="col-md-6">
            <h5 class="text-center">Plain Text</h5>
            <h6 class="text-center">Hasil Enkripsi</h6>
            <textarea readonly bind:value={plain} name="" id="" cols="30" rows="3" class="form-control"></textarea>
        </div>
    </div>
</div>