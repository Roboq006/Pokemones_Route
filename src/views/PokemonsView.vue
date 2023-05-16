<script setup>
import axios from 'axios';
import {ref} from 'vue';
//import { RouterLink } from 'vue-router';


const pokApiarray = ref([]);
const getData = async () =>{
    try{
        const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon')
        console.log(data);
        pokApiarray.value= data.results

    }
    catch(error){
        console.log(error);

    }

}

getData();
    


</script>

<template>
    <div class="pokemons">
        <h1>Proyecto Pokemons Router</h1>
        <ul>
            <!-- <li v-for="pok in pokApiarray" >{{ pok.name }}</li> METODO QUE NO ES DINAMICO-->
            <li v-for="pok in pokApiarray"><router-link :to="`/pokemons/${pok.name}`">{{ pok.name }}</router-link>
            </li> 
        </ul>

    </div>

</template>