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
    <button @click="toggleTheme"> 
      <div class="theme-toggle"></div>
    </button>
</template>

<style scoped>
@media (max-width: 600px){
  button{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: none;
  }
  .theme-toggle{
      width: 0px;
      height: 0px;
      border-radius: 50%;
      border: 0;
      background-color: var(--text-color);
      outline: 0;
  }
}
@media (min-width: 992px) {
  button{
    width: 100px;
    height: 100px;
    background: none !important;
  }
  .theme-toggle{
      width: 30px;
      height: 30px;
      outline: 2px solid var(--text-color);
      background: none;
  }
}
</style>