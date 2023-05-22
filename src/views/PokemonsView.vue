<script setup>
// import axios from 'axios';
// import {ref} from 'vue';
//import { RouterLink } from 'vue-router';

import {UseGetData} from '@/composablespractica/GetData';

const {data, getData, loading, errorData} = UseGetData();

// const pokApiarray = ref([]);
// const getData = async () =>{
//     try{
//         const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon')
//         console.log(data);
//         pokApiarray.value= data.results

//     }
//     catch(error){
//         console.log(error);

//     }

// }

getData('https://pokeapi.co/api/v2/pokemon');
    


</script>

<template>
    <div class="pokemons">
        <h1>Proyecto Pokemons Router</h1>
        <p v-if="loading">Cargando datos</p>
        <div class="alert alert-danger mt-2" v-if="errorData">{{ errorData }}</div>
        <div v-if="data">
            <ul  class="list-group">
                <li v-for="pok in data.results" class="list-group-item"><router-link :to="`/pokemons/${pok.name}`">{{ pok.name }}</router-link>
                    <!-- <li v-for="pok in pokApiarray" >{{ pok.name }}</li> METODO QUE NO ES DINAMICO-->
                </li> 
             </ul>
             <div class="mt-2">
                <button
                       :disabled="!data.previous" class="btn btn-success me-2"
                       @click="getData(data.previous)"
                       >
                       Previo
                </button>
                <button
                       :disabled="!data.next" class="btn btn-danger"
                       @click="getData(data.next)"
                       >
                       Next
                </button>

             </div>
        </div>

    </div>

</template>