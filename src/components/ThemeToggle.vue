<script lang>

export default{
  data() {
    return {
      currentTheme: 'dark'
    };
  },
  methods: {
    toggleTheme() {
      this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', this.currentTheme);
    }
  },
  mounted() {
    document.documentElement.setAttribute('data-theme', this.currentTheme);
  }
}
</script>

<template>
    <button @click="toggleTheme" id="theme-toggle"></button>
</template>

<style scoped>
    button{
        width: 2em;
        height: 2em;
        border-radius: 50%;
        outline: none;
        border: none;
        background-color: var(--text-color);;
    }
</style>