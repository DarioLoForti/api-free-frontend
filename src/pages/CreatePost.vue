<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
  name: 'CreatePost',
  data() {
    return {
      title: '',
      content: '',
      categoryId: null,
      tags: '',
      postImage: null,
      store,
    };
  },
  methods: {
    onFileChange(event) {
      this.image = event.target.files[0];
    },
    async createPost() {
      const formData = new FormData();
      formData.append('title', this.title);
      formData.append('content', this.content);
      formData.append('categoryId', this.categoryId);
      if (this.tags) {
        const tagsArray = this.tags.split(',').map(tag => tag.trim());
        tagsArray.forEach(tag => formData.append('tags', tag));
      }
      if (this.postImage) {
        formData.append('postImage', this.postImage);
      }

      try {
        const response = await axios.post(`${this.store.baseApiUrl}/posts`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('Post creato con successo', response.data);
        // Puoi aggiungere ulteriori azioni qui, come reindirizzamenti o aggiornamenti dello stato
      } catch (error) {
        console.error('Errore nella creazione del post', error);
      }
    },
  },
};
</script>

<template lang="">
    <main>
        <div class="container">
          <div class="row">
            <div class="col-12 mt-3">
              <h3 class="text-center">Crea un Nuovo Post</h3>
            </div>
            <div class="col-12 mt-5">
              <form @submit.prevent="createPost" enctype="multipart/form-data">
                <div class="form-group">
                  <label for="title">Titolo</label>
                  <input type="text" id="title" v-model="title" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="content">Contenuto</label>
                  <textarea id="content" v-model="content" class="form-control" required></textarea>
                </div>
                <div class="form-group">
                  <label for="categoryId">Categoria</label>
                  <input type="number" id="categoryId" v-model="categoryId" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="tags">Tag (separati da virgole)</label>
                  <input type="text" id="tags" v-model="tags" class="form-control">
                </div>
                <div class="form-group">
                  <label for="postImage">Immagine</label>
                  <input type="file" id="postImage" @change="onFileChange" class="form-control" required>
                </div>
                <button type="submit" class="btn btn-sm btn-primary my-4">Crea Post</button>
              </form>
            </div>
          </div>
        </div>
      </main>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
</style>