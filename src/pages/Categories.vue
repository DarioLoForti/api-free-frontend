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
        axios.get("http://localhost:3000/posts").then(response => {
                store.posts = response.data.posts;
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
                    <h1>Posts</h1>
                    <ul>
                        <li v-for="post in store.posts" :key="post.id">
                            <h2>{{ post.title }}</h2>
                            <p>{{ post.content }}</p>
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