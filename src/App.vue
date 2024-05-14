<script lang>
import { RouterLink, RouterView } from 'vue-router'
import ThemeToggle from './components/ThemeToggle.vue';
import Header from './components/Header.vue';

import './assets/main.scss'; 


export default {
    name: 'App',
    components: {
      ThemeToggle,
      Header,
      
    }
};
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
 
  
</template>

<style scoped>


</style>
