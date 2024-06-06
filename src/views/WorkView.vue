<script lang>
import { useRouter } from 'vue-router';
import Footer from '../components/Footer.vue';
import Sphere from '../components/Sphere.vue';

export default{
  props: {
    links: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  components: {
      Footer,
      Sphere
  },
  mounted() {
    document.querySelector(".arrow-cursor").style.display = "none";
   
    if (this.links.length < 4) {
      let nodeList = document.querySelectorAll('.work-link');
      nodeList.forEach(element => {
          this.links.push(element);
      });
    }

  },
  methods:{
    revealCaseImg: (image) => {
      document.querySelector("#case-img").style.backgroundImage = 'url("' + image + '")';
      document.querySelector("#case-img").style.opacity = "1";
      document.querySelector("#case-img").style.filter = "blur(0)";
    },
    hideCaseImg: () => {
      document.querySelector("#case-img").style.opacity = "0";
      document.querySelector("#case-img").style.filter = "blur(10px)";
    },
  },
  
}
</script>

<template>
  <div class="work-view desktop" >
    <div class="flex-half">
      <div id="case-img"></div>
    </div>
    <div class="flex-half">
      <ul>
        <li>01<router-link to="/coriander" class="work-link" @mouseover=' revealCaseImg("/cases/coriander/Coriander.jpg");' @mouseleave="hideCaseImg();">
        Coriander
        </router-link></li>
        <li>02<router-link to="/nordik" class="work-link" @mouseover=' revealCaseImg("/cases/nordik/Nordik.jpg");' @mouseleave="hideCaseImg();">
        Nordik
        </router-link></li>
        <li>03<router-link to="/gamel" class="work-link" @mouseover=' revealCaseImg("/cases/gamel/Gamel.jpg");' @mouseleave="hideCaseImg();">
        Gamél
        </router-link></li>
        <li>04<router-link to="/skilled" class="work-link" @mouseover=' revealCaseImg("/cases/skilled/Skilled.jpg");' @mouseleave="hideCaseImg();">
        Skilled
        </router-link></li>
        <li>05<router-link to="/concreate" class="work-link" @mouseover=' revealCaseImg("/cases/concreate/Concreate.jpg");' @mouseleave="hideCaseImg();">
        Concreate
        </router-link></li>
        <li>06<router-link to="/hitech" class="work-link" @mouseover=' revealCaseImg("/cases/hitech/Hitech.jpg");' @mouseleave="hideCaseImg();">
        HiTech
        </router-link></li>
      </ul>
    </div>
    
    </div>


  <div class="responsive" id="work-wrapper">
    <p id="intro"> Nordik is a webshop concept in minimalistic grid design. With a compact top-down deep information structure the design is user intuitive according to the sites hierarchical task analysis.</p>

    <router-link to="/nordik" class="case-card">
      <img src="/cases/nordik/Nordik.jpg" alt="">
      <h2> <div class="circle"></div> Nordik </h2>
      <p>Nordik is a webshop concept in minimalistic grid design. With a compact top-down deep information structure the design is user intuitive according to the sites hierarchical task analysis.</p>
    </router-link>
    <router-link to="/gamel" class="case-card">
      <img src="/cases/gamel/Gamel.jpg" alt="">
      <h2> <div class="circle"></div>  Gamél </h2>
      <p>The web presence of the danish production agency Gamél centralises its photo- and videographic content in the modern minimalist grid style design in muted tones and with attention to detail elements in the animation of user interaction points such as buttons, cursor, sliders and overlays. </p>
    </router-link>
    <router-link to="/skilled" class="case-card">
      <img src="/cases/skilled/Skilled.jpg" alt="">
      <h2> <div class="circle"></div> Skilled </h2>
      <p>Skilled is the concept of an educational platform app with all aspects reduced to the optimal usability. The user experience is build on a brand identity in flat primary blue duotone design with an icon category system in vector line style.</p>
    </router-link>
    <router-link to="/concreate" class="case-card">
      <img src="/cases/concreate/Concreate.jpg" alt="">
      <h2> <div class="circle"></div> Concreate </h2>
      <p>The CONCREATE zine is an exploration of brutalist style across graphic design, architecture, art, typography and web design. The project was completed by five students from Jönköping University in 2021.</p>
    </router-link>
    <router-link to="/coriander" class="case-card">
      <img src="/cases/coriander/Coriander.jpg" alt="">
      <h2> <div class="circle"></div> Coriander </h2>
      <p>Coriander is there to discover and share recipes. The interface and information architecture of the app are designed to accommodate for the wide range of user generated content.</p>
    </router-link>
  </div>
  
</template>

<style scoped>
@media (min-width: 200px){
  #intro{
    margin-bottom: 30vh;
  }
}
@media (min-width: 1024px){
  .work-view{
  display: none;
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  padding: 15vh 5vw;
  z-index: 20;
}
.flex-half{
  width: 48%;
  height: 100%;
  align-content: end;
}
#case-img{
  height: 25rem;
  width: 20rem;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  transition: all 1s ease;
  filter: blur(10px);
}
ul{
  position: relative;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
li{
  list-style: none;
  padding: 0;
  display: flex;
  align-items: baseline;
}
.work-link{
  opacity: 0;
  text-transform: uppercase;
  font-family: "Mori Light";
  font-size: 5rem;
  animation: fadeIn 1s forwards;
  animation-delay: var(--fade-delay);
  height: 5rem;
  display: flex;
  align-items: last baseline;
  padding: 0;
  margin-left: 2%;
}
.work-link:hover{
  font-style: normal;
}

li:nth-child(1) {
  --fade-delay: 0s;
}

li:nth-child(2) {
  --fade-delay: 0.1s;
}
li:nth-child(3) {
  --fade-delay: 0.2s;
}

li:nth-child(4) {
  --fade-delay: 0.3s;
}
li:nth-child(5) {
  --fade-delay: 0.4s;
}
li:nth-child(6) {
  --fade-delay: 0.5s;
}
}


</style>
