<script>

    import {createEventDispatcher} from 'svelte'
    const dispatch = createEventDispatcher();

    export let algo = {};
    export let algoActive = {};
</script>


<div on:click={()=>dispatch('algoChange', algo)} class="card" class:active={algoActive.name === algo.name}>
    <h4 class="text-center">{algo.name}</h4>
</div>


<style>

    .card.active{
        background: red;
        color:white;
    }
    .card{
        border:none;
        box-shadow: 0px 5px 10px -5px rgba(0,0,0,.1);
        padding:20px;
        transition: .3s;
    }

    .card:hover{
        cursor:pointer;
    }
</style>
