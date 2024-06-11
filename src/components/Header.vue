<script>
import { store } from '../store.js'
export default {
  name: 'Header',
  data() {
    return {
      store
    }
  },
}
</script>
<template lang="">
  <header>
    <div class="container-fluid">
        <div class="row">
            <div class="col-4">
                <h1>Titolo</h1>
            </div>
            <div class="col-8">
              <div class="menu">
                <ul class="d-flex justify-content-center align-items-cente mt-5 text-white">
                    <li class="px-2"><a href=""><router-link :to="{ name: 'home' }">Home</router-link></a></li>
                    <li class="px-2"><a href=""><router-link :to="{ name: 'register' }">Register</router-link></a></li>
                    <li class="px-2"><a href=""><router-link :to="{ name: 'create-post' }">New Post</router-link></a></li>
                    <li class="px-2"><a href=""><router-link :to="{ name: 'create-tag' }">New Tag</router-link></a></li>
                    
                    
                </ul>
            </div>
            </div>
        </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
  @use '../styles/generals.scss' as *;

  header {
    background-color: black;
    color: white;
    padding: 20px 0;
    text-align: center;

    ul{
      list-style: none;
      li{
        a{
          text-decoration: none;
          color: white;
          font-weight: 500;
          font-size: 20px;
        }
      }
      }
    }
  
</style>