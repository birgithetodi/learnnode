<script setup>
import { computed, ref } from 'vue';
import ItemList from '../components/ItemList.vue';

    let newItem = ref('');
    let i = 1;
    let items = ref([
        {id: i++, name: 'Aperol', isDone: true},
        {id: i++, name: 'Apelsin', isDone: false},
        {id: i++, name: 'Schweppes', isDone: true},
        {id: i++, name: 'Mandariin', isDone: false},
    ]);
    let code = ref(404);

function addItem(){
    if(newItem.value.trim() !== '') {
    items.value.push({id: i++,name: newItem.value.trim(), isDone: false});
    }
    newItem.value = '';
}
let doneItems = computed(() => {
    return items.value.filter(item => item.isDone);
});
let toDoItems = computed(() => {
    return items.value.filter(item => !item.isDone);
});

</script>pt
<template>
<div class="container">
    <div class="content">
        <div class="field has-addons">
            <div class="control">
                <input v-model="newItem" class="input" type="text" placeholder="Add item" @keydown.enter="addItem">
            </div>
            <div class="control">
                <button class="button is-info" @click="addItem">
                    Add item
                </button>
            </div>
        </div>

    <ItemList :items="items" title="Items"></ItemList>
    <ItemList :items="doneItems"  title="Done items"></ItemList>
    <ItemList :items="toDoItems"  title="ToDo items"></ItemList>

        <input v-model="code" class="input" type="number" placeholder="Enter error code">
        <img :src="'https://http.cat/'+ code">
    </div>
</div>
</template>

//v-bind:value="message" v-on:input="message=$event.target.value" on sama mis v-model aga raskem