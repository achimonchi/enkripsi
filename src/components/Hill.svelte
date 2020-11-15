<script>
    export let algoActive = {};
    
</script>

<div class="algoDetail mt-5 mb-5">
    <h3>{algoActive.name}</h3>
    <div class="row">
        <div class="col-md-6">
            <h5>Enkripsi</h5>
            <textarea name="" id="" cols="30" rows="10" class="form-control"></textarea>
        </div>
        <div class="col-md-6">
            <h5>Dekripsi</h5>
            <textarea name="" id="" cols="30" rows="10" class="form-control"></textarea>
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