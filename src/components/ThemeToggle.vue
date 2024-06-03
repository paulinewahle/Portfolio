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
    button{
      width: 100px;
      height: 100px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: none !important;
      border: none;
    }
    .theme-toggle{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 0;
        outline: 2px solid var(--text-color);
        background: none;
    }
</style>