<script setup>
import { ref } from 'vue';

    let newItem = ref('Hello Vue!');
    let items = ref(['Aperol', 'Apelsin', 'Schweppes']);
    let code = ref(404);

function addItem(){
    items.value.push(newItem.value);
    newItem.value = '';
}

</script>pt
<template>
<div class="container">
    <div class="content">
        <div class="field has-addons">
            <div class="control">
                <input v-model="newItem" class="input" type="text" placeholder="Add item">
            </div>
            <div class="control">
                <button class="button is-info" @click="addItem">
                    Add item
                </button>
            </div>
        </div>
        <h1>{{ newItem }}</h1>
        <ul>
            <li v-for="item in items">{{ item }}</li>
        </ul>
        <input v-model="code" class="input" type="number" placeholder="Enter error code">
        <img :src="'https://http.cat/'+ code">
    </div>
</div>
</template>

//v-bind:value="message" v-on:input="message=$event.target.value" on sama mis v-model aga raskem