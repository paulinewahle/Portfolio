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
    },
    responsiveNav(){
            if(this.navActive === false){
                this.navActive = true
                document.querySelector("#responsive-nav").style.left = "0vw"
                document.querySelector(".nav-content").style.left = "10vw"
                const hamburger = document.getElementById("hamburger").children;
                hamburger[0].style.transform = "rotate(45deg)";
                hamburger[1].style.width = "0";
                hamburger[2].style.transform = "rotate(-45deg)";
                hamburger[0].style.marginTop = "-9px";
                hamburger[2].style.marginTop = "9px";
            }
            else{
                this.navActive = false
                document.querySelector("#responsive-nav").style.left = "-100vw";
                document.querySelector(".nav-content").style.left = "-100vw";
                const hamburger = document.getElementById("hamburger").children;
                hamburger[0].style.transform = "rotate(0deg)";
                hamburger[1].style.width = "100%";
                hamburger[2].style.transform = "rotate(0deg)";
                hamburger[0].style.marginTop = "0";
                hamburger[2].style.marginTop = "0";
            }
        }
    }
        
    
};

</script>
<template>
    <div class="responsive-header-bg"></div>
    <header class="responsive responsive-header">  
            <ThemeToggle/>
            <RouterLink id="header-title" to="/home" @click="responsiveNav()"> <h2>PAULINE WAHLE</h2> </RouterLink>
            <div id="hamburger" @click="responsiveNav()">
                <span />
                <span />
                <span />
            </div>
    </header>
    <div id="responsive-nav" class="responsive">
        <div class="nav-content responsive">
        <div>
            <a class="small-nav-link" target="_blank" href="https://linkedin.com/in/paulinewahle"> LinkedIn </a>
            <a class="small-nav-link" target="_blank" href="https://www.behance.net/paulinewahle1"> Dribble </a>
            <a class="small-nav-link" target="_blank" href="https://www.behance.net/paulinewahle1"> Behance </a>
            <a class="small-nav-link" target="_blank" href="https://github.com/paulinewahle"> Github </a>
            <a class="small-nav-link" target="_blank" href="https://codepen.io/PaulineWahle"> CodePen </a>
            <a class="small-nav-link" target="_blank" href="https://www.pinterest.de/PaulineWahle/"> Pinterest </a>
        </div>
        <div>
            <RouterLink class="big-nav-link" to="/work" @click="responsiveNav()"> WORK </RouterLink>
            <RouterLink class="big-nav-link" to="/about" @click="responsiveNav()"> ABOUT </RouterLink>
        </div>
        <div>
            <p>Get in touch</p>
            <a class="small-nav-link" target="_blank" to="/work"> pauline.wahle@web.de </a>
        </div>
        </div>
    </div>
    <header class="desktop">
        <RouterLink id="home" to="/home" @click="scrollUp();">PAULINE WAHLE</RouterLink>
        <nav>
            <RouterLink to="/home" :class="{ 'active-site': currentSite === 'home' }" 
            @click="scrollDown(); currentSite = 'home'" id="work">Work</RouterLink>
            <RouterLink to="/about" @click="currentSite = 'about'" :class="{ 'active-site': currentSite === 'about' }" id="about">About</RouterLink>
        </nav>
        <ThemeToggle/>
    </header>
    

    
</template>
<style scoped>
@media (min-width: 200px) {
    .responsive-header-bg{
        height: 10vh;
        width: 100vw;
        position: fixed;
        background-color: var(--background-color);
        z-index: 50;
        top: 0;
        left: 0;
    }
    .responsive-header{
        height: 10vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10% 10vw;
        box-sizing: border-box;
        z-index: 70;
        mix-blend-mode: difference;
    }
    #header-title{
        font-style: normal;
        font-weight: 100;
        text-align: center;
        border: 0;
        text-decoration: none;
        z-index: 70;
        color: white;
    }
    #hamburger{
        height: 30px;
        width: 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        z-index: 70;
    }
    span{
        height: 2px; 
        width: 100%;
        background-color: white;
        transition: transform .5s ease;
        transform-origin: top left;
    }
    #responsive-nav{
        background-color: var(--text-color);        
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: -100vw;
        transition: all .5s ease;
        z-index: 60;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .nav-content{
        position: fixed;        
        top: 10vh;
        height: 80vh;
        width: 80vw;
        left: -100vw;
        transition: all .5s ease;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .big-nav-link, .small-nav-link, p{
        display: block;
        color: var(--background-color);
        text-decoration: none;
        border: none;
        text-align: center;
    }
    .big-nav-link{
        font-size: 2.5em;

    }
    .small-nav-link, p{
        font-size: 1em;
        line-height: 1.6em;
    } 
    p{
        text-indent: 0;
    }

}
@media (min-width: 600px) {

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
        /* mix-blend-mode: none; */
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