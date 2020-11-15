<script>
    import Card from './../shared/Card.svelte';
    import Affine from './Affine.svelte';
    import Hill from './Hill.svelte';
    
    const algorithms = [
        {name : "Affine Cipher", url : "affine-cipher", component:Affine},
        {name : "Hill Cipher", url : "hill-cipher", component:Hill},
    ];
    let algoActive = {name : "Affine Cipher", url : "affine-cipher", component:Affine}
    
    const algoChange=(e)=>{
        algoActive = e.detail
    }
</script>

<section id="algo">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="algo">
                    <h4 class="mb-3" style="font-weight:400">Pilih Algoritma Enkripsi</h4>
                    <div class="row">
                        {#each algorithms as algo}
                            <div class="col-md">
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

