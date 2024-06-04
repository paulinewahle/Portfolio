<script lang>
import ThemeToggle from '../components/ThemeToggle.vue';
import '../assets/main.scss'; 

export default {
    name: 'App',
    components: {
        ThemeToggle
    },
    props:{
    links: Array,
    },
    data() {
    return {
        currentSite: 'home'
    };
    },
    mounted() {
    document.querySelector(".arrow-cursor").style.display = "none";
    var documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    this.links.push(document.querySelector('#about'));
    this.links.push(document.querySelector('#work'));
    this.links.push(document.querySelector('#home'));
    },
    methods:{
        
    scrollDown(){
        setTimeout(() => {
        document.documentElement.scrollTop = document.documentElement.scrollHeight - window.innerHeight / 1.2;
        }, 1);
    },
    scrollUp(){
        document.documentElement.scrollTop = 0;
    }
    }
        
    
};

</script>
<template>
    <header>
        <RouterLink id="home" to="/home" @click="scrollUp();">PAULINE WAHLE</RouterLink>
        <nav>
            <RouterLink to="/home" :class="{ 'active-site': currentSite === 'home' }" 
            @click="scrollDown(); currentSite = 'home'" id="work">Work</RouterLink>
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
        z-index: 400;
        position: fixed;
    }
    nav{
        position: absolute;
        height: initial;
        text-transform: uppercase;
        font-style: normal;
        left: 50vw;
        /* margin-left: calc(50vw - 48%); */
    }
    nav a{
        padding-right: 2em;
    }
    a:hover{
        font-style: normal;
    }
    .active-site{
        font-family: "Mori Bold";
    }

}
</style>