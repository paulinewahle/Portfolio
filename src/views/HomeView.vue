<script lang>
import { useRouter } from 'vue-router';
export default{
  name: 'Navigation',
  setup() {
    const router = useRouter();
    const routes = router.getRoutes(); // Access the routes
    const excludedRoutes = ['home', 'PageNotFound', 'about']; // Add any other route names you want to exclude
    const workRoutes = routes.filter(route => !excludedRoutes.includes(route.name));

    return {
      workRoutes
    };
  }
}
</script>

<template>
  <div id="link-wrapper">
    <nav>
    <ul>
        <li class="fade-item" v-for="route in workRoutes" :key="route.name" >
          <router-link :to="route.path">{{ route.name }}</router-link>
        </li>
    </ul>
   
  </nav>

  </div>
</template>

<style scoped>
  ul{
    width: 50vw;
    position: relative;
    left: 50vw;
    padding: 0;
  }
  li{
    opacity: 0;
    list-style: none;
    text-transform: uppercase;
    font-size: 4em;
    animation: fadeIn 1s;
    animation: fadeIn 1s forwards;
    animation-delay: var(--fade-delay);
  }
  
  @keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
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
