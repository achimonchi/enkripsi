<script>
    let key = "";
    export let algoActive = {};
</script>

<div class="algoDetail mt-5 mb-5">
    <h3>{algoActive.name} <span style="font-size:15pt; opacity:.9;color:red; "><i>(Under Progress)</i> </span></h3>
    <h6>Masukkan Key</h6>
    <div class="row mb-3 mt-3">
        <div class="col-md-4">
            <input type="text" maxlength="32" placeholder="Panjang Key Maksimal 32 Karakter" class="form-control" bind:value={key}>
        </div>
        <div class="col-md-4">
            <h6>Key anda : {key}</h6>
            <h6>Panjang Key Anda : {key.length}</h6>
        </div>
    </div>
    <div class="row mb-5">
        <div class="col-md-12">
            <h3 class="text-center">Proses Enkripsi</h3>
            <hr>
        </div>
        <div class="col-md-6 mb-3">
            <h5 class="text-center">Plain Text</h5>
            <textarea name="" id="" cols="30" rows="3" class="form-control"></textarea>
        </div>
        <div class="col-md-6 mb-3">
            <h5 class="text-center">Cipher</h5>
            <textarea readonly name="" id="" cols="30" rows="3" class="form-control"></textarea>
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