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
  <div id="left-wrapper">

  </div>
  <div id="right-wrapper">
    <p>Hello, I’m Pauline Wahle - user experience designer and frontend developer.
Coming from a degree in graphic design, and a following degree focusing on digital spaces with studies in user experience and front-end development, I draw from a wholistic view on design, usability and technology. Always considering the usability aspect, I find it fascinating to explore and reimagine digital spaces in new ways that surprise, simplify and create lasting impressions. By taking opportunities to establish original ideas, each design can get a unique look and feel. My basis for both design and development is creative thinking, to stay flexible, keep moving and find alternative paths.
    </p>
  </div>
</template>

<style scoped>
  @media (min-width: 992px) {

  }
</style>
