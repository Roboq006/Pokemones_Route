<script setup>
import axios from 'axios';
import { ref } from 'vue';
//import { RouterLink, useRoute } from 'vue-router'; //metodo Route
import {useRoute, useRouter} from 'vue-router'; //metodo Router

const route = useRoute();
const router = useRouter();
const poke = ref({});

const back = ()=>{
    router.push('/pokemons');
}


const getData = async () =>{

    try{
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.nombrePokemon }`);
        poke.value=data;
        //console.log(data);

    }

    catch(error){
        console.log(error);
        poke.value = null;

    }
}

getData();

</script>



<template>
    <div v-if="poke">
        <img :src="poke.sprites?.front_default" alt=""/>
        <h1>Nombre de mi Pokemon: {{ $route.params.nombrePokemon }}</h1>
    </div>
    <h1 v-else>No existe el pokemon</h1>
    <button @click="back" class="btn btn-outline-primary">Volver</button>
    
</template>

