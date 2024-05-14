<script lang>
import { RouterLink, RouterView } from 'vue-router'
import ThemeToggle from './components/ThemeToggle.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import './assets/main.scss'; 


export default {
    name: 'App',
    components: {
      ThemeToggle,
      Header,
      Footer
    }
};
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
  
</template>

<style scoped>


</style>
