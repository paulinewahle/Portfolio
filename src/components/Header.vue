<script lang>
    import ThemeToggle from '../components/ThemeToggle.vue';
    import '../assets/main.scss'; 

    export default {
    name: 'App',
    components: {
      ThemeToggle
    },
    data() {
    return {
      currentSite: 'home'
    };
    },
        
    
};

</script>
<template>
    <header>
        <RouterLink to="/home">Pauline Wahle</RouterLink>
        <nav>
            <RouterLink to="/home#work" :class="{ 'active-site': currentSite === 'home' }" 
            @click="currentSite = 'home'" id="home">Work</RouterLink>
            <RouterLink to="/about" @click="currentSite = 'about'" :class="{ 'active-site': currentSite === 'about' }" id="about">About</RouterLink>
        </nav>
        <ThemeToggle/>
    </header>
</template>
<style scoped sass>
@media (min-width: 200px) {

}
@media (min-width: 992px) {
    header{
        width: 100vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-size: 1em;
        box-sizing: border-box;
        padding: 3vh 5vw;
        height: 10vh;
        z-index: 1000;
        position: fixed;
    }
    h1{
        font-size: 1em;
        font-weight: regular;
    }
    nav{
        height: initial;
        text-transform: uppercase;
        font-style: normal;
        margin-left: calc(50vw - 50%);
    }
    nav a{
        padding-right: 2em;
    }
    .active-site{
        font-style: italic;
    }
}
</style>