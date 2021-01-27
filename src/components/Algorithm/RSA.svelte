<script>
    export let algoActive={};
</script>

<div class="algoDetail mt-5 mb-5">
    <h3>{algoActive.name}</h3>
    <h6>
        Masukkan Key
    </h6>
    <div class="row mb-3">
        <div class="col-md-3">
            <div class="row">
                <div class="col-md-12 mb-3">
                    <label for="">Masukkan P :</label>
                    <input type="text" placeholder="Bilangan Prima" class="form-control mb-3">
                </div>
                <div class="col-md-12 mb-3">
                    <label for="">Masukkan Q :</label>
                    <input type="text" placeholder="Bilangan Prima" class="form-control mb-3">
                </div>
                <div class="col-md-12 mb-3">
                    <label for="">Masukkan E :</label>
                    <input type="text" class="form-control mb-3">
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="row">
                <div class="col-md-12 mb-3">
                    <label for="">Bilangan M</label>
                    <input type="text" class="form-control mb-3" readonly>
                </div>
                <div class="col-md-12 mb-3">
                    <label for="">Bilangan N</label>
                    <input type="text" class="form-control mb-3" readonly>
                </div>
                <div class="col-md-12 mb-3">
                    <label for="">Bilangan D</label>
                    <input type="text" class="form-control mb-3" readonly>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="row align-center">
                <div class="col-md-12 mb-3">
                    <label for="">Public Key</label>
                    <textarea cols="30" rows="3" class="form-control mb-3" readonly></textarea>
                </div>
                <div class="col-md-12 mb-3">
                    <label for="">Private Key</label>
                    <textarea cols="30" rows="3" class="form-control mb-3" readonly></textarea>
                </div>
            </div>
        </div>
    </div>

    <div class="row mb-5 mt-3">
        <div class="col-md-12">
            <h3 class="text-center">Proses Enkripsi</h3>
            <hr>
        </div>
        <div class="col-md-6 mb-3">
            <h5 class="text-center">Plain Text</h5>
            <textarea cols="30" rows="3" class="form-control mb-3"></textarea>
        </div>
        <div class="col-md-6 mb-3">
            <h5 class="text-center">Cipher Text</h5>
            <textarea cols="30" rows="3" class="form-control mb-3" readonly></textarea>
        </div>
    </div>
    <div class="row mb-3 mt-3">
        <div class="col-md-12">
            <h3 class="text-center">Proses Dekripsi</h3>
            <hr>
        </div>
        <div class="col-md-6 mb-3">
            <h5 class="text-center">Plain Text</h5>
            <textarea cols="30" rows="3" class="form-control mb-3"></textarea>
        </div>
        <div class="col-md-6 mb-3">
            <h5 class="text-center">Cipher Text</h5>
            <textarea cols="30" rows="3" class="form-control mb-3" readonly></textarea>
        </div>
    </div>
</div>