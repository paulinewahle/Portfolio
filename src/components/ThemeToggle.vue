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
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: none;
    border-radius: 50%;
    border: 0;
    outline: 0;
  }
}
@media (min-width: 1370px) {
  .theme-toggle{
    outline: 2px solid var(--text-color);
    background: none;
  }
}
</style>