<script>
import { store } from '../store.js';
import axios from'axios';
export default {
    name: 'Posts',
   data() {
    return {
        store
    }
   },
   methods: {
    
    getPosts() {
        axios.get("http://localhost:3000/categories").then(response => {
                store.categories = response.data;
            })
            .catch(error => {
                console.error('Errore nella richiesta dei post', error);
            });
    
    },
    },
        created(){
        this.getPosts();
       }
}
</script>
<template lang="">
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Categories</h1>
                    <ul>
                        <li v-for="category in store.categories" :key="category.id">
                            <h2>{{ category.name }}</h2>
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