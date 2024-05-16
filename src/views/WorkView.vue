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
          <li class="fade-item" v-for="route in workRoutes" :key="route.name" >
            <router-link :to="route.path">{{ route.name }}</router-link>
          </li>
      </ul>
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
}
.flex-half{
  width: 50%;
  height: 100%;
  align-content: end;
}
#case-img{
  background-color: grey;
  height: 25rem;
  width: 20rem;
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
  opacity: 0;
  list-style: none;
  text-transform: uppercase;
  font-size: 4em;
  animation: fadeIn 1s forwards;
  animation-delay: var(--fade-delay);
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

</style>
