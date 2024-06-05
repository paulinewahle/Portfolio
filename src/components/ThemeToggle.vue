<script lang>

export default{
  props:{
  },
  data() {
    return {
      currentTheme: 'dark',
    };
  },
  mounted() {
    document.documentElement.setAttribute('data-theme', this.currentTheme);
  },
  methods: {
    toggleTheme() {
      this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', this.currentTheme);
    },
  },
}
</script>

<template>
    <button @click="toggleTheme" class="theme-toggle"></button>
</template>

<style scoped>
@media (min-width: 200px){
  .theme-toggle{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: white;
    border: none;
    outline: 0;
    z-index: 70;
  }
}
@media (min-width: 1024px) {
  .theme-toggle{
    outline: 2px solid var(--text-color);
    background: none;
  }
}
</style>