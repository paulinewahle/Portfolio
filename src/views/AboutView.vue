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
    <div class="line"></div>
        <div class="link-container">
          <h2> Design </h2>
          <div class="so-me-link">
            <a href="https://www.behance.net/paulinewahle1" target="_blank" class="about-link"><p> Behance <p class="responsive arrow">&#8227;</p> </p></a>
            <a href="https://dribbble.com/PaulineWahle" target="_blank" class="about-link"><p> Dribble <p class="responsive arrow">&#8227;</p> </p></a>
            <a href="https://www.pinterest.de/PaulineWahle/" target="_blank" class="about-link"><p> Pinterest <p class="responsive arrow">&#8227;</p> </p></a>
          </div>
        </div>
        <div class="line"></div>
        <div  class="link-container">
          <h2> Code </h2>
          <div class="so-me-link">
            <a target="_blank" href="https://github.com/paulinewahle" class="about-link" ><p> Github <p class="responsive arrow">&#8227;</p> </p></a>
            <a target="_blank" href="https://codepen.io/PaulineWahle" class="about-link"><p> CodePen<p class="responsive arrow">&#8227;</p> </p></a>
          </div>
        </div>
        <div @mouseover="width1 = '80%'" @mouseleave="width1 = '40%'" class="link-container">
          <h2> Experience </h2>
          <div class="so-me-link">
            <a  target="_blank" href="https://www.linkedin.com/in/paulinewahle/" class="about-link"><p> LinkedIn<p class="responsive arrow">&#8227;</p> </p></a>
          </div>
          </div>
          <div class="line"></div>
        <div @mouseover="width1 = '80%'" @mouseleave="width1 = '40%'" class="link-container">
          <h2> Recognition </h2>
          <div class="so-me-link">
            <a href="https://www.webguruawards.com/sites/paulinewahle-com" style="background: url(http://webguruawards.com/awards/GOTM/img_guru_of_the_month_gray.png) no-repeat; background-position: center right; background-size: contain; width:80px; height:80px; margin-top: 10%; " target="_blank" class="about-link"></a>
          </div>
          </div>
      
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
