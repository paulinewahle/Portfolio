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


    window.onscroll = function() {scrollTransition()};
    function scrollTransition() {
      if (document.documentElement.scrollTop > 300) {
        console.log(document.documentElement.scrollTop)
        document.querySelector(".text-cursor").style.display = "none";
        document.querySelector(".work-view").style.display = "block";
        document.body.footer.style.display = "block";

      }
      else if (document.documentElement.scrollTop < 300){
        document.querySelector(".text-cursor").style.display = "block";
        document.querySelector(".work-view").style.display = "none";
        document.body.footer.style.display = "none";
      }
      else{

      }
    }

    const percentLabel = document.querySelector("#percent");
      window.addEventListener("scroll", () => {
        let scrollTop = window.scrollY;
        let docHeight = document.documentElement.scrollHeight; // Correctly get the document height
        let winHeight = window.innerHeight;
        let scrollPercent = scrollTop / (docHeight - winHeight);
        let scrollPercentRounded = Math.min(100, Math.round(scrollPercent * 100));
        percentLabel.innerHTML = `${scrollPercentRounded}%`;
      });
  }
}
</script>

<template>

    <main>
      
      <div class="home-view start-view" id="landing">
          <a href="#work" class="desktop" id="scrollbutton">Scroll to continue . . .</a>
      
          <p id="scroll-percentage" class="desktop">
            <span id="percent"></span>
          </p>

          <div class="responsive">
          <h1> UI/UX Design
          <div class="line"> </div>
          Frontend Code
          </h1>
          <RouterLink to="/work" id="entrance-link"> View Portfolio  </RouterLink>
          <p :style="{ 'font-size': '.5em'}"> Curious to see this site on desktop? </p>
          </div>

      </div>
      
    </main>

    <div id="work" class="desktop">
      <WorkView />
    </div>
    
    <Sphere />
    <Footer />

</template>

<style scoped>
@media (min-width: 200px) {
  h1{
    margin: 15vh 0;
  }
  .home-view{
    height: 80vh;
    width: 80vw;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    display: flex !important;
  }
  #entrance-link{
    width: 80vw;
    text-align: center;
    border-bottom: 1px solid #292929;
    text-decoration: none;
    display: block;
    font-size: 1.5em;
  }
  p{
    text-indent: 0;
    text-align: center;
  }

}
@media (min-width: 992px) {
  main{
    max-height: 200vh;
  }
  .home-view{
    height: 200vh;
    width: 90vw;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: -20vh;
  } 
  #home-title{
    position: fixed;
    text-align: left;
    width: auto;
    left: 5vw;
    top: 20vh;
    font-size: 4.5rem;
  }
  #scrollbutton{
    position: fixed;
    z-index: 150;
    width: 20vw;
    left: 50vw;
    top: 90vh;
    font-size: 1rem;
  }
  #scroll-percentage{
    position: fixed;
    width: 10vw;
    top: 90vh;
    left: 93vw;
    z-index: 150;
    text-align: start;
    margin: 0;
    font-size: 1rem;
  }
 
}  

</style>