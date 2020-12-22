<script>
    let key = "";
    let plain = "";
    let key2binary = "";
    export let algoActive = {};
    
    import {divPlainTo2Group, encryption, generate8Group, generateBinary, generateKey, reverseBinary} from './../../helper/algo/gost'

    function genKey (key) {
        const genK = generateKey(key);
        const gen8 = generate8Group(genK);
        const bin = generateBinary(gen8);
        key2binary = bin;
        return bin.join("");
    }
    $: binary = genKey(key)
    $: fixKey = generateKey(key)
    $: cipher = letsEncrypt(plain)
    
    function letsEncrypt(plain){
        if(plain.length === 8){
            let plainBinary = divPlainTo2Group(plain);
            let reversePlainBinary = reverseBinary(plainBinary);
            let encrypt = encryption(reversePlainBinary, key2binary);
            return encrypt;
        } else {
            let len = 8 - plain.length;
            return len;
        }
    }
</script>

<div class="algoDetail mt-5 mb-5">
    <h3>{algoActive.name} <span style="font-size:15pt; opacity:.9;color:red; "><i>(Under Progress)</i> </span></h3>
    <h6>Masukkan Key</h6>
    <div class="row mb-3 mt-3">
        <div class="col-md-4">
            <input type="text" maxlength="32" placeholder="Panjang Key Maksimal 32 Karakter" class="form-control" bind:value={key}>
        </div>
        <div class="col-md-8">
            <h6>Key Anda : {fixKey}</h6>
            <h6>Panjang Key Anda : {key.length}</h6>
            <h6>Binary Key Anda : {binary}</h6>
        </div>
    </div>
    <div class="row mb-5">
        <div class="col-md-12">
            <h3 class="text-center">Proses Enkripsi</h3>
            <hr>
        </div>
        <div class="col-md-6 mb-3">
            <h5 class="text-center">Plain Text </h5>
            <h6 style="opacity:.8; color:red" class="text-center"><i>Hanya bisa 8 karakter</i> </h6>
            <textarea name="" id="" cols="30" bind:value={plain} rows="3" class="form-control"></textarea>
        </div>
        <div class="col-md-6 mb-3">
            <h5 class="text-center">Cipher</h5>
            <h6 style="" class="text-center">Hasil Enkripsi</h6>
            <textarea readonly name="" id="" cols="30" rows="3" class="form-control">{cipher}</textarea>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <h3 class="text-center">Proses Dekripsi</h3>
            <hr>
        </div>
        <div class="col-md-6 mb-3">
            <h5 class="text-center">Cipher Text</h5>
            <textarea name="" id="" cols="30" rows="3" class="form-control"></textarea>
        </div>
        <div class="col-md-6 mb-3">
            <h5 class="text-center">Plain Text</h5>
            <textarea readonly name="" id="" cols="30" rows="3" class="form-control"></textarea>
        </div>
    </div>
</div>