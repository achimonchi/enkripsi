<script>

    import {createEventDispatcher} from 'svelte'
    const dispatch = createEventDispatcher();

    export let algo = {};
    export let algoActive = {};
</script>


<div on:click={()=>dispatch('algoChange', algo)} class="card" class:active={algoActive.name === algo.name}>
    <h4 class="algoName">{algo.name}</h4>
    <h4><i class="fas fa-check-circle" style="color:white"></i></h4>
</div>


<style>

    .card.active{
        background: #30475e;
        color:white;
    }
    h4{
        padding: 0;
        margin: 0;
        align-self: center;
    }
    i{
        float: right;
        align-self: center;
    }
    .card{
        border:none;
        box-shadow: 0px 5px 10px -5px rgba(0,0,0,.1);
        padding:20px;
        transition: .3s;
        display: flex !important;
        flex-direction: row;
        justify-content: space-between;
    }

    .card:hover{
        cursor:pointer;
    }
    
    @media screen and (max-width: 600px) {
        h4 {
            font-size: 14pt;
        }
    }
</style>
