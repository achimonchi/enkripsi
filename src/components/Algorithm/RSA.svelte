<script>
    export let algoActive={};
    let encrypt = "";
    let p = 0;
    let q = 0;

    import {
        convertTo4Block,
        convertToAsciiCode,
        decryption,
        encryption,
        getD,
        getRelativePrime
    } from './../../helper/algo/RSA'
    let arrRelative = "";
    let plain="";
    let cipher = "";
    let e = 1;
    $: m = getM(p,q);
    $: n = getN(p,q);
    $: arrRelative = relative(p,q);
    $: d = getPrivateKey(e);
    $: cipher = myEncryption(plain)

    let publicKey = "(e,N) = ";
    let privateKey = "(d,N) = ";

    function getM(p,q){
        return p*q;
    }

    function getN(p,q){
        return (p-1)*(q-1);
    }

    function getPrivateKey(e){
        // let n = getN(p,q);
        if(e==1){
            return 0;
        } else {
            let d = getD(e,n);
            publicKey = `(e,N) = (${e}, ${n})`
            privateKey = `(d,N) = (${d}, ${n})`
            return d;
        }
    }

    function relative(p,q){
        const n = getN(p,q);
        let r = getRelativePrime(n);
        return r;
    }

    function myEncryption(plain){
        const arrAscii = convertToAsciiCode(plain);
        const arrBlock = convertTo4Block(arrAscii);
        const encrypt = encryption(arrBlock, e, n);
        let str = encrypt.toString();
        return str;
    }

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
                    <input bind:value={p} type="text" placeholder="Bilangan Prima" class="form-control mb-3">
                </div>
                <div class="col-md-12 mb-3">
                    <label for="">Masukkan Q :</label>
                    <input bind:value={q} type="text" placeholder="Bilangan Prima" class="form-control mb-3">
                </div>
                <div class="col-md-12 mb-3">
                    <label for="">Masukkan E :</label>
                    <select bind:value={e} class="form-control mb-3">
                        {#if arrRelative.length > 0}
                            {#each arrRelative as prime}
                                <option value={prime}>{prime}</option>
                            {/each}
                        {:else}
                            <option value="">--- Pilih P dan Q ----</option>
                        {/if}
                    </select>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="row">
                <div class="col-md-12 mb-3">
                    <label for="">Bilangan M</label>
                    <input bind:value={m} type="text" class="form-control mb-3" readonly>
                </div>
                <div class="col-md-12 mb-3">
                    <label for="">Bilangan N</label>
                    <input bind:value={n} type="text" class="form-control mb-3" readonly>
                </div>
                <div class="col-md-12 mb-3">
                    <label for="">Bilangan D</label>
                    <input bind:value={d} type="text" class="form-control mb-3" readonly>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="row align-center">
                <div class="col-md-12 mb-3">
                    <label for="">Public Key</label>
                    <textarea cols="30" rows="3" class="form-control mb-3" readonly>{publicKey}</textarea>
                </div>
                <div class="col-md-12 mb-3">
                    <label for="">Private Key</label>
                    <textarea cols="30" rows="3" class="form-control mb-3" readonly>{privateKey}</textarea>
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
            <textarea bind:value={plain} cols="30" rows="3" class="form-control mb-3"></textarea>
        </div>
        <div class="col-md-6 mb-3">
            <h5 class="text-center">Cipher Text</h5>
            <textarea cols="30" rows="3" class="form-control mb-3" readonly>{cipher}</textarea>
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