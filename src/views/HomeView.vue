<script lang>
import Sphere from '@/components/Sphere.vue'
import WorkView from '@/views/WorkView.vue'
import Footer from '../components/Footer.vue'

export default{
  props:{
    links: Array
  },
  components: {
    Sphere,
    WorkView,
    Footer
  },
  mounted() {
    document.querySelector(".arrow-cursor").style.display = "none";
    document.querySelector(".cursor").style.display = "block";

    setTimeout(() => {
      document.querySelector('#transitionScreen').style.opacity = "0";
    }, 100);


    window.onscroll = function() {scrollTransition()};
    function scrollTransition() {
      var frame = document.querySelector('#frame');
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      var halfwayPoint = documentHeight / 2;
      var scrollFraction = Math.min(scrollTop / halfwayPoint, 1);

      var maxBorderHeight = 30; // 30vh
      var maxBorderWidth = 40;  // 40vw

      var newBorderHeight = scrollFraction * maxBorderHeight;
      var newBorderWidth = scrollFraction * maxBorderWidth;

      frame.style.borderWidth = newBorderHeight + 'vh ' + newBorderWidth + 'vw';

      if (document.documentElement.scrollTop > documentHeight / 1.2) {
        document.querySelector(".work-view").style.display = "flex";
      }
      else if (document.documentElement.scrollTop < documentHeight / 1.2){
        document.querySelector(".work-view").style.display = "none";
      }
      else{
        document.querySelector(".work-view").style.display = "none";
      }
    }

    
  }
}
</script>

<template>
    <div id="transitionScreen"></div>
    <div id="frame"></div>
    <Sphere />
    <div id="work">
      <WorkView :links="links"/>
    </div>
    <Footer />

</template>

<style scoped>
@media (min-width: 200px) {


}
@media (min-width: 992px) {
body{
  height: 150vh !important;
}

#frame{
  position: fixed;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: solid var(--background-color);
  /* border: solid blue; */
  z-index: 10;
  pointer-events: none;
  } 
  .frameAnimation{
    animation: border-width 2s ease-in forwards;
  }
  @keyframes border-width {
    to {
      border-width: 30vh 40vw;
    }
  }
  
 
}  

</style>