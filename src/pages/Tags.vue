<script>
import { store } from '../store.js';
import axios from'axios';
export default {
    name: 'Tags',
   data() {
    return {
        store
    }
   },
   methods: {
    
    getTags() {
        axios.get("http://localhost:3000/tags").then(response => {
                store.tags = response.data;
            })
            .catch(error => {
                console.error('Errore nella richiesta dei tags', error);
            });
    
    },
    },
        created(){
        this.getTags();
       }
}
</script>
<template lang="">
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Tags</h1>
                    <ul>
                        <li v-for="tag in store.tags" :key="tag.id">
                            <h2>{{tag.name }}</h2>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </main>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
</style>