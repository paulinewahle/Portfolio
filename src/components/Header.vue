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
        <h1>Pauline Wahle</h1>
        <nav>
            <RouterLink to="/" :class="{ 'active-site': currentSite === 'home' }" 
            @click="currentSite = 'home'" id="home">Home</RouterLink>
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
        max-width: 100vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-size: 1em;
        box-sizing: border-box;
        padding: 3vh 5vw;
        height: 10vh;
    }
    h1{
        font-size: 1em;
        font-weight: regular;
    }
    nav{
        height: initial;
        position: absolute;
        left: 50vw;
        text-transform: uppercase;
        font-style: normal;
    }
    nav a{
        padding-right: 2em;
    }
    .active-site{
        font-style: italic;
    }
}
</style>