<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
  name: 'CreateCategory',
  data() {
    return {
      name: '',
      store,
    };
  },
  methods: {
    async createCategory() {
      try {
        const response = await axios.post(`${this.store.baseApiUrl}/categories`, { name: this.name });
        console.log('Categoria creata con successo', response.data);
      } catch (error) {
        console.error('Errore nella creazione della categoria', error);
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
              <h3 class="text-center">Crea una Nuova Categoria</h3>
            </div>
            <div class="col-12 mt-5">
              <form @submit.prevent="createCategory">
                <div class="form-group">
                  <label for="name">Nome della Categoria</label>
                  <input type="text" id="name" v-model="name" class="form-control" required>
                </div>
                <button type="submit" class="btn btn-sm btn-primary my-4">Crea Categoria</button>
              </form>
            </div>
          </div>
        </div>
      </main>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
</style>