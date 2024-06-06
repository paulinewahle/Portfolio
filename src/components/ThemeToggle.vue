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
    <button @click="toggleTheme" >
      <div class="theme-toggle"></div>
    </button>
</template>

<style scoped>
@media (min-width: 200px){
  button{
    height: 90px;
    width: 90px;
    border: none;
    border-radius: 50%;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
  button{
    
  }
  .theme-toggle{
    outline: 2px solid var(--text-color);
    background: none;
  }
}
</style>