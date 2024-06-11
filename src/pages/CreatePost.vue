<script>
import {store} from '../store.js';
import axios from 'axios';
export default {
    name: "CreatePost",
    data () {
        return {
            alltags: [],
            store,
            title: '',
            // slug: '',
            image: '',
            content: '',
            published: true,
            categoryID: '',
            tags: [],
            errors: {}
        }
    },
    methods: {
        async getCategories() {
            try {
                const response = await axios.get("http://localhost:3000/categories");
                store.categories = response.data;
                console.log(store.categories);

            } catch (error) {
                console.error(error);
            }
        },
        async sendPage() {
            try {
                const response = await axios.post("http://localhost:3000/posts", {
                title: this.title,
                slug: this.slug,
                image: this.image,
                content: this.content,
                published: this.published,
                categoryID: this.categoryID,
                tags: this.tags
                });

                if (response.status === 200) {
                    window.location.href = "/"
                }

            } catch (error) {
                if (error.response && error.response.data && error.response.data.errors) {
                this.errors = error.response.data.errors.reduce((errors, error) => {
                    errors[error.path] = error.msg;
                    return errors;
                }, {})
                console.log(this.errors);
                } else {
                this.errors = true;
                }
            }
        },
    },
    mounted() {
        this.getCategories()
    }
}
</script>


<template lang="">
<main>
  <div class="container">
    <div class="row">
      <div class="col-12">
          <form action="" method="post"  @submit.prevent="sendPage()">
            <div class="form-group mb-3">
                <label for="title">Titolo</label>
                <input type="text" class="form-control" id="title" v-model="title" placeholder="Minimo 5 caratteri">
                <div v-if="errors.title" class="alert-danger alert"> {{ errors.title }} </div>
            </div>
            <div class="form-group mb-3">
                <label for="image">Immagine</label>
                <input type="text" class="form-control" id="image" v-model="image" placeholder="Inserisci l'url dell'immagine">
                <div v-if="errors.image" class="alert-danger alert"> {{ errors.image }} </div>
            </div>
            <div class="form-group mb-3">
                <label for="content">Contenuto</label>
                <textarea class="form-control" id="content" rows="3"  v-model="content"></textarea>
                <div v-if="errors.content" class="alert-danger alert"> {{ errors.content }} </div>
            </div>
            <div class="form-group mb-3">
                <label for="published">Pubblicato?</label>
                <div>
                    <input type="radio" id="published-yes" name="published" v-model="published" :value="true" class="me-1">
                    <label for="published-yes">Sì</label>
                </div>
                <div>
                    <input type="radio" id="published-no" name="published" v-model="published" :value="false" class="me-1">
                    <label for="published-no">No</label>
                </div>
                <div v-if="errors.published" class="alert-danger alert"> {{ errors.published }} </div>
            </div>
            <div class="form-group mb-3">
                <label for="categoryID">Categoria</label>
                <select class="form-control" id="categoryID" v-model="categoryID">
                    <option v-for="category in store.categories" :value="category.id">{{category.name}}</option>
                </select>
                <div v-if="errors.categoryID" class="alert-danger alert"> {{ errors.categoryID }} </div>
            </div>
            <div class="form-group mb-3">
                <label for="tags">Tags</label>
                <select class="form-control" id="tags" v-model="tags" multiple>
                    <option v-for="tag in alltags" :value="tag.id">{{tag.name}}</option>
                </select>
                <div v-if="errors.tags" class="alert-danger alert"> {{ errors.tags }} </div>
            </div>

            <button type="submit">Invia</button>
        </form>
      </div>
    </div>
  </div>
</main>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
</style>