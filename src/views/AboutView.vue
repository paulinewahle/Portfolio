<script lang>
export default{
  

}
</script>

<template>
  <div id="about-view">
  <div id="left-wrapper">
    <div id="profile-pic"></div>
    
    <div id="email">
      <a href="emailto:pauline.wahle@web.de" target="_blank">pauline.wahle@web.de</a>
      <h2>Get In Touch</h2>
    </div>
    <div id="links">
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
    <p>Hello, I’m Pauline Wahle - user experience designer and frontend developer.
Coming from a degree in graphic design, and a following degree focusing on digital spaces with studies in user experience and front-end development, I draw from a wholistic view on design, usability and technology. Always considering the usability aspect, I find it fascinating to explore and reimagine digital spaces in new ways that surprise, simplify and create lasting impressions. By taking opportunities to establish original ideas, each design can get a unique look and feel. My basis for both design and development is creative thinking, to stay flexible, keep moving and find alternative paths.
    </p>
  </div>
</div>
</template>

<style scoped>
  @media (min-width: 992px) {
    #about-view{
      display: flex;
      flex-direction: row;
    }
    #left-wrapper, #right-wrapper{
      border: 1px solid;
      width: 50vw;
      height: 100vh;
      padding: 15vh 5vw;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  
    #right-wrapper{
      padding-left:  0;
    }
    .link-container{
      /* width: 70%; */
      display: flex;
      align-items: baseline;
    }
    #right-wrapper p{
      font-size: 1.8em;
      height: 100%;
      width: 80%;
    }
    #profile-pic{
      background-image: url(../assets/img/profile.jpg);
      background-size: cover;
      background-position: center top;
      height: 25rem;
      width: 20rem;
    }
    h2, a{
      font-size: .8rem;
      height: initial;
    }
    h2{
      text-transform: uppercase;
      width: 30%;
      font-weight: bold;
      margin: 0;
    }
    a{
      margin-right: 1em;
    }
    p{
      margin: 0;
    }
    #email a{
      font-size: 1.5em;
      font-family: 'Mori Bold', sans-serif;
      margin: 0;
    }
  }
</style>
