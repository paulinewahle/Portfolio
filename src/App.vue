<script lang>
import { RouterLink, RouterView } from 'vue-router'
import ThemeToggle from './components/ThemeToggle.vue';
import Header from './components/Header.vue';
import Cursor from '@/components/Cursor.vue'


import './assets/main.scss'; 


export default {
    name: 'App',
    components: {
      ThemeToggle,
      Header,
      Cursor
    },
    data(){
        return{
          links: [],
          className: ''
        }
    },
};
</script>

<template>
  
  <Header />
    <RouterView :links="links"/>
    <Cursor :links="links" />
  
</template>

<style scoped>


</style>
