<script>
    import Card from './../shared/Card.svelte';
    import Affine from './Algorithm/Affine.svelte';
    import Caesar from './Algorithm/Caesar.svelte';
import Des from './Algorithm/DES.svelte';
import Gost from './Algorithm/Gost.svelte';
    import Vigenere from './Algorithm/Vigenere.svelte';
    
    const typeAlgo = [
        {name :"Traditional"},
        {name :"Modern"},
    ]

    const algorithms = [
        {type:"Traditional",name : "Affine Cipher", url : "affine-cipher", component:Affine},
        {type:"Traditional",name : "Vigenere Cipher", url : "vigenere-cipher", component:Vigenere},
        {type:"Traditional",name : "Caesar Cipher", url : "caesar-cipher", component:Caesar},
        {type:"Modern",name : "GOST", url : "caesar-cipher", component:Gost},
        {type:"Modern",name : "DES", url : "caesar-cipher", component:Des},
    ];
    let algoActive = {}
    let typeActive = {};
    
    const algoChange=(e)=>{
        algoActive = e.detail
    }

    const typeChange = (e)=>{
        typeActive=e.detail;
    }
</script>

<section id="algo" class="mb-5">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h4 class="mb-3" style="font-weight:400">Pilih Type Algoritma</h4>
                <div class="row">
                    {#each typeAlgo as type}
                        <div class="col-6 col-md-4 mb-3">
                            <Card on:algoChange={typeChange} algoActive={typeActive} algo={type}/>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
        {#if typeof typeActive.name !== "undefined"}
        <div class="row mt-3">
            <div class="col-md-12">
                <div class="algo">
                    <h4 class="mb-3" style="font-weight:400">Pilih Algoritma Enkripsi <b><i>{typeActive.name}</i></b></h4>
                    <div class="row">
                        {#each algorithms as algo}
                            {#if algo.type === typeActive.name}
                                <div class="col-6 col-md-4 mb-3">
                                    <Card on:algoChange={algoChange} algoActive={algoActive} algo={algo}/>
                                </div>
                            {/if}
                        {/each}
                    </div>
                </div>
                <div class="algo-detail">
                    {#if typeof algoActive.name !== "undefined"}
                        <svelte:component this={algoActive.component} algoActive={algoActive} />
                    {/if}
                </div>
            </div>
        </div>
        {/if}
    </div>
</section>

