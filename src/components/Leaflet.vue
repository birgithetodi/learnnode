<script setup>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/images/marker-icon-2x.png';
import 'leaflet/dist/images/marker-shadow.png';

import { onMounted, useId, watch } from 'vue';
let { lat, lng, zoom } = defineProps(['lat', 'lng', 'zoom']);

let id = 'map-' + useId();
let map = null;
onMounted(() => {
    map = L.map(id).setView([lat, lng], zoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([59.42681, 24.743445]).addTo(map);

    var polygon = L.polygon([
        [59.21672, 24.65902],
        [59.21671, 24.65931],
        [59.21661, 24.65931],
        [59.21661, 24.65901],
    ]).addTo(map);

    var circle = L.circle([59.21676, 24.65916], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 5
}).addTo(map);
});

watch(() => zoom, (zoom, oldZoom) => {
    console.log(zoom, oldZoom);
    map.setZoom(zoom);
});
watch(() => lat, lat => {
    map.panTo([lat, lng]);
});
watch(() => lng, lng => {
    map.panTo([lat, lng]);
});

</script>
<template>
    <div :id="id"></div>
</template>

<style scoped>
div {
    height: 40vh;
}
</style>