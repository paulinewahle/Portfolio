<script lang>
import Sphere from '@/components/Sphere.vue'
import WorkView from '@/views/WorkView.vue'
import Footer from '../components/Footer.vue'

export default{
  props:{
    sideNav: Array
  },
  components: {
    Sphere,
    WorkView,
    Footer
  },
  mounted() {
    document.querySelector(".arrow-cursor").style.display = "none";
    document.querySelector(".text-cursor").style.display = "block";

    setTimeout(() => {
      this.isLoading = false;
    }, 15000);


    window.onscroll = function() {scrollTransition(); frameTransition()};
    function scrollTransition() {
      if (document.documentElement.scrollTop > 300) {
        document.querySelector(".text-cursor").style.display = "none";
        document.querySelector(".work-view").style.display = "flex";
      }
      else if (document.documentElement.scrollTop < 300){
        document.querySelector(".text-cursor").style.display = "block";
        document.querySelector(".work-view").style.display = "none";
      }
      else{
        document.querySelector(".work-view").style.display = "none";
      }
    }
    function frameTransition(){
      // document.querySelector('#frame').classList.add('frameAnimation');
    }

    
  }
}
</script>

<template>

   
    <div id="frame"></div>
    <Sphere />
    <WorkView />
    <Footer />

</template>

<style scoped>
@media (min-width: 200px) {


}
@media (min-width: 992px) {
body{
  height: 200vh !important;
}
#frame{
  position: fixed;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* border: solid var(--background-color); */
  border: solid red;
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