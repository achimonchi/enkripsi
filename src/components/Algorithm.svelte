<script>
    import Card from './../shared/Card.svelte';
    import Affine from './Affine.svelte';
    import Vigenere from './Vigenere.svelte';
    
    const algorithms = [
        {name : "Affine Cipher", url : "affine-cipher", component:Affine},
        {name : "Vigenere Cipher", url : "vigenere-cipher", component:Vigenere},
        // {name : "Hill Cipher", url : "hill-cipher", component:Hill},
    ];
    let algoActive = {}
    
    const algoChange=(e)=>{
        algoActive = e.detail
    }
</script>

<section id="algo" class="mb-5">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="algo">
                    <h4 class="mb-3" style="font-weight:400">Pilih Algoritma Enkripsi</h4>
                    <div class="row">
                        {#each algorithms as algo}
                            <div class="col-md mb-3">
                                <Card on:algoChange={algoChange} algoActive={algoActive} algo={algo}/>
                            </div>
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
    </div>
</section>

