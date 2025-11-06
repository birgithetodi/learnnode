<script setup>
import { ref } from 'vue';
import Leaflet from '../components/Leaflet.vue';

let zoom = ref(19);
let coords = ref({
    lat: 59.42681,
    lng: 24.743445,
})

</script>
<template>
    <div>
        <input v-model="zoom" type="range" max="19" min="1" step="1">
        {{ zoom }}
        <button class="button is-primary" @click="coords={lat: 59.41632, lng: 24.79890}">Go to Airport</button>
        <button class="button is-link" @click="coords={lat: 59.21675, lng: 24.65914}">Go Home</button>
    </div>
    <Leaflet :lat="coords.lat" :lng="coords.lng" :zoom="zoom"></Leaflet>
    <Leaflet :lat="24.743445" :lng="59.42681" :zoom="5"></Leaflet>
</template>