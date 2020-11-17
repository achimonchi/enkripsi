<script>
    export let algoActive = {};
    let encrypt = "";
    let key = "";

    $: matriks = arrKey(key)

    function arrKey(key){
        let arr = [];
        key.split(" ").map((k)=>{
            arr.push(k)
        })
        return arr;
    }
</script>

<div class="algoDetail mt-5 mb-5">
    <h3>{algoActive.name}</h3>
    <h5>Matriks</h5>
    <h6>Matriks harus berupa m x m, setiap baris dipisah dengan spasi</h6>
    <div class="row mb-5">
        <div class="col-md-6">
            <textarea bind:value={key} name="" id="" cols="30" rows="3" class="form-control"></textarea>
        </div>
        <div class="col-md-4">
            {#each matriks as mat}
                {mat}&nbsp;
                <br/>
            {/each}
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <h3 class="text-center">Proses Enkripsi</h3>
            <hr>
        </div>
        <div class="col-md-6">
            <h5>Plain Text</h5>
            <h6>C=(Pi * Ki)(mod 26)</h6>
            <textarea name="" id="" bind:value={encrypt} cols="30" rows="10" class="form-control"></textarea>
        </div>
        <div class="col-md-6">
            <h5>Cipher</h5>
            <h6>Hasil Dekripsi</h6>
            <textarea disabled name="" id="" cols="30" rows="10" class="form-control"></textarea>
        </div>
    </div>
</div>

<style>
    .algoDetail{
        box-shadow: 0 5px 10px -5px rgba(0,0,0,.1);
        background: #fff;
        padding:20px;
    }
</style>