<script lang>

export default{
  props:{
    className: String
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
    onMouseOver() {
      // Emit an event to notify the parent component about the mouseover event
      this.$emit('stickyCursor');
    }
  },
}
</script>

<template>
    <button @click="toggleTheme" class="theme-toggle"  @mouseover="stickyCursor"></button>
</template>

<style scoped>
    button{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        outline: none;
        border: 0;
        outline: 3px solid var(--text-color);
        background: none;
    }
</style>