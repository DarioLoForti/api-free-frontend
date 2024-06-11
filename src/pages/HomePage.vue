<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'HomePage',

data(){
    return {
        store,
    }
},
}
</script>
<template lang="">
    <main>
        <h1>benvenuto
        </h1>
    </main>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
</style>