<script setup>
import { ref } from 'vue';

    let cookies = ref(0);
    
</script>
<template>
    <div class="columns">
        <div class="column has-background-danger has-text-centered">
            <h1>{{ cookies }} cookies!</h1>
            <div @click="cookies++">
            <img src="https://www.pikpng.com/pngl/b/32-323639_chocolate-cookies-png-cookie-clipart.png" alt="">
            </div>
    </div>
        <div class="column has-background-warning">
            test
        </div>
        <div class="column has-background-primary">
            test
        </div>
    </div>
</template>