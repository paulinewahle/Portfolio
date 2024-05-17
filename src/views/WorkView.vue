<script lang>
import { useRouter } from 'vue-router';
import Footer from '../components/Footer.vue';
import Sphere from '../components/Sphere.vue';

export default{
  props:{
      // links: Array,
  },
  components: {
      Footer,
      Sphere
  },
  setup() {
    const router = useRouter();
    const routes = router.getRoutes(); // Access the routes
    const excludedRoutes = ['home', 'PageNotFound', 'about']; // Add any other route names you want to exclude
    const workRoutes = routes.filter(route => !excludedRoutes.includes(route.name));

    return {
      workRoutes
    };
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
  mounted() {
    document.querySelector(".arrow-cursor").style.display = "none";
    // this.links.push(document.querySelector('.fade-item'))

  }
}
</script>

<template>
  <div class="work-view">
    <div class="flex-half">
      <div id="case-img"></div>
    </div>
    <div class="flex-half">
      <ul>
        <router-link to="/coriander" class="work-link" @mouseover=' revealCaseImg("/cases/coriander/Coriander.jpg");' @mouseleave="hideCaseImg();">
        Coriander
        </router-link>
        <router-link to="/nordik" class="work-link" @mouseover=' revealCaseImg("/cases/nordik/Nordik.jpg");' @mouseleave="hideCaseImg();">
        Nordik
        </router-link>
        <router-link to="/gamel" class="work-link" @mouseover=' revealCaseImg("/cases/gamel/Gamel.jpg");' @mouseleave="hideCaseImg();">
        Gamél
        </router-link>
        <router-link to="/skilled" class="work-link" @mouseover=' revealCaseImg("/cases/skilled/Skilled.jpg");' @mouseleave="hideCaseImg();">
        Skilled
        </router-link>
        <router-link to="/concreate" class="work-link" @mouseover=' revealCaseImg("/cases/concreate/Concreate.jpg");' @mouseleave="hideCaseImg();">
        Concreate
        </router-link>
        <router-link to="/hitech" class="work-link" @mouseover=' revealCaseImg("/cases/hitech/Hitech.jpg");' @mouseleave="hideCaseImg();">
        HiTech
        </router-link>
      </ul>
      <!-- <ul>
          <li class="fade-item" v-for="route in workRoutes" :key="route.name" >
            <router-link :to="route.path">{{ route.name }}</router-link>
          </li>
      </ul> -->
    </div>
    
    </div>
  
  
</template>

<style scoped>
.work-view{
  display: none;
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  padding: 10vh 5vw;
  z-index: 20;
}
.flex-half{
  width: 50%;
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
a{
  opacity: 0;
  list-style: none;
  text-transform: uppercase;
  font-size: 4em;
  animation: fadeIn 1s forwards;
  animation-delay: var(--fade-delay);
}
  
  


a:nth-child(1) {
  --fade-delay: 0s;
}

a:nth-child(2) {
  --fade-delay: 0.1s;
}
a:nth-child(3) {
  --fade-delay: 0.2s;
}

a:nth-child(4) {
  --fade-delay: 0.3s;
}
a:nth-child(5) {
  --fade-delay: 0.4s;
}
a:nth-child(6) {
  --fade-delay: 0.5s;
}

</style>
