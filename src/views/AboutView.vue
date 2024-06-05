<script lang>
import Footer from '../components/Footer.vue';
export default{
  components: {
      Footer,
    },
  mounted() {
    document.querySelector(".arrow-cursor").style.display = "none";
    document.querySelector(".cursor").style.display = "block";

    setTimeout(() => {
      document.querySelector('#transitionScreen').style.opacity = "0";
    }, 100);
  }
}
</script>

<template>
  <div id="transitionScreen" class="desktop"></div>
  <div id="about-view" class="responsive">
    <h2>  <div class="circle"></div>UX DESIGN</h2>
    <p>Hi, I’m Pauline Wahle - user experience designer and frontend developer.
      I conceptualise and realise user friendly designs. With five years of experience and two degrees, I draw from a holistic view on design, usability and technology. Always considering the usability aspect, I find it fascinating to explore and reimagine digital spaces in new ways that surprise, simplify and create lasting impressions. By taking opportunities to establish original ideas, each design can get a unique look and feel. My basis for both design and development is creative thinking, to stay flexible, keep moving and find alternative paths.
    </p>
    <Footer/>
  </div>
  <div id="about-view" class="desktop">
  <div id="left-wrapper">
    
    <h1 class="desktop">UX DESIGN</h1>
   
    <div id="links" class="desktop">
      <div id="email">
      <a href="emailto:pauline.wahle@web.de" target="_blank">pauline.wahle@web.de</a>
      <h2>Get In Touch</h2>
    </div>
        <div class="link-container">
          <h2> Design </h2>
            <a href="https://www.behance.net/paulinewahle1" target="_blank" class="about-link">Behance</a>
            <a href="https://dribbble.com/PaulineWahle" target="_blank" class="about-link">Dribble</a>
            <a href="https://www.pinterest.de/PaulineWahle/" target="_blank" class="about-link">Pinterest</a>
        </div>
        <div  class="link-container">
          <h2> Code </h2>
            <a target="_blank" href="https://github.com/paulinewahle" class="about-link" >Github</a>
            <a target="_blank" href="https://codepen.io/PaulineWahle" class="about-link">Codepen</a>
        </div>
        <div  class="link-container">
          <h2> Experience </h2>
            <a  target="_blank" href="https://www.linkedin.com/in/paulinewahle/" class="about-link">LinkedIn</a>
          </div>
          <div  class="link-container">
          <h2> Recognition </h2>
            <a href="https://www.webguruawards.com/sites/paulinewahle-com" target="_blank" class="about-link"> WebGuru Awards</a>
          </div>
    </div>
  </div>
  <div id="right-wrapper">
    <p class="desktop">Hi, I’m Pauline Wahle - user experience designer and frontend developer.
      I conceptualise and realise user friendly designs. With five years of experience and two degrees, I draw from a holistic view on design, usability and technology. Always considering the usability aspect, I find it fascinating to explore and reimagine digital spaces in new ways that surprise, simplify and create lasting impressions. By taking opportunities to establish original ideas, each design can get a unique look and feel. My basis for both design and development is creative thinking, to stay flexible, keep moving and find alternative paths.
    </p>
  </div>
</div>
</template>

<style scoped>
  @media (min-width: 200px) {
    #about-view{
      display: flex;
      flex-direction: column;
    }
    h1{
      border-top: 1px solid var(--text-color);
    }
    #email a{
      font-size: 1.5em;
    }
  }
  @media (min-width: 1024px) {
    #about-view{
      flex-direction: row;
      margin: 0;
    }
    #left-wrapper, #right-wrapper{
      width: 50vw;
      height: 100vh;
      padding: 15vh 5vw;
      display: flex;
      flex-direction: column;
    }
    #left-wrapper{
      justify-content: space-between;
    }
    #right-wrapper{
      padding-left: 0;
      justify-content: flex-end;
    }
    #right-wrapper p{
      column-count: 2;
      column-width: 90%;
      column-gap: 7%;
      margin: 0;
    }
    .link-container{
      display: flex;
      align-items: baseline;
    }
    #profile-pic{
      background-image: url(../assets/img/profile.jpg);
      background-size: cover;
      background-position: center top;
      height: 7rem;
    	width: 5rem;
      margin: 1%;
    }
    h1{
      border: none;
    }
    h2, a, p{
      font-size: .8rem;
      height: initial;
    }
    h2{
  
      width: 30%;
      margin: 0;
      display: block;
    }
    a{
      margin-right: 1em;
    }
    #email{
      margin-bottom: 10%;
    }
    #email a{
      font-size: 1.5em;
      font-family: 'Mori Bold', sans-serif;
      margin: 0;
    }

  }
</style>
