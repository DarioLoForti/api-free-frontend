<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
  name: 'CreateTag',
  data() {
    return {
      name: '',
      store,
    };
  },
  methods: {
    async createTag() {
      try {
        const response = await axios.post(`${this.store.baseApiUrl}/tags`, { name: this.name });
        console.log('Tag creato con successo', response.data);
      } catch (error) {
        console.error('Errore nella creazione del tag', error);
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
              <h3 class="text-center">Crea un Nuovo Tag</h3>
            </div>
            <div class="col-12 mt-5">
              <form @submit.prevent="createTag">
                <div class="form-group">
                  <label for="name">Nome del Tag</label>
                  <input type="text" id="name" v-model="name" class="form-control" required>
                </div>
                <button type="submit" class="btn btn-sm btn-primary my-4">Crea Tag</button>
              </form>
            </div>
          </div>
        </div>
      </main>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
</style>