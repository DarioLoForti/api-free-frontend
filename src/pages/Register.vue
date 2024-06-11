<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'Register',
    data(){
    return {
        name: '',
        email: '',
        password: '',
        profileImage: null,
        store,
    };
},
methods:{
    onFileChange(e){
        this.profileImage = e.target.files[0];
    },
    async registerUser(){
        const formData = new FormData();
        formData.append('name', this.name);
        formData.append('email', this.email);
        formData.append('password', this.password);
        if(this.profileImage){
            formData.append('profileImage', this.profileImage);
        }
        

        try {
            const response = await axios.post(`${store.registerUser}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
            console.log("User registered successfully", response.data);

        } catch (error) {
            console.error("Registration error", error);
        }
    }
    }
}
</script>
<template lang="">
    <main>
        <div class="container">
          <div class="row">
            <div class="col-12 mt-3">
                <h3 class="text-center">Register</h3>
            </div>
            <div class="col-12 mt-5">
              <form @submit.prevent="registerUser" enctype="multipart/form-data">
                <div class="form-group">
                  <label for="name">Nome</label>
                  <input type="text" id="name" v-model="name" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" v-model="email" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" id="password" v-model="password" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="profileImage">Immagine</label>
                  <input type="file" id="profileImage" @change="onFileChange" class="form-control" required>
                </div>
                <button type="submit" class="btn btn-sm btn-primary my-4">Registrati</button>
              </form>
            </div>
          </div>
        </div>
      </main>
</template>
<style lang="scss">
@use '../styles/generals.scss' as *;
</style>