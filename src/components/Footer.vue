<script lang>
export default{
    
    mounted() {
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
    <footer class="responsive">
      
            <h2> Pauline Wahle</h2>
        <div class="line"></div>
            <RouterLink to="/about"> About </RouterLink>
        <div class="line"></div>
            <RouterLink to="/work"> Work </RouterLink>
        <div class="line"></div>
            <p>Get in touch</p>
            <a target="_blank" to="/work"> pauline.wahle@web.de </a>
        <div class="line"></div>

        <div>
            <a target="_blank" href="https://linkedin.com/in/paulinewahle">  <img src="/src/assets/img/Linkedin.svg" alt="dribble"   width="20">  </a>
            <a target="_blank" href="https://dribbble.com/PaulineWahle">  <img src="/src/assets/img/dribble.svg" alt="dribble"   width="20"> </a>
            <a target="_blank" href="https://www.behance.net/paulinewahle1">  <img src="/src/assets/img/behance.svg" alt="dribble"   width="20"> </a>
            <a target="_blank" href="https://github.com/paulinewahle">  <img src="/src/assets/img/Github.svg" alt="dribble"   width="20">  </a>
            <a target="_blank" href="https://codepen.io/PaulineWahle">  <img src="/src/assets/img/Codepen.svg" alt="dribble"   width="20">  </a>
            <a target="_blank" href="https://www.pinterest.de/PaulineWahle/">  <img src="/src/assets/img/Pinterest.svg" alt="dribble"   width="20">  </a>
        </div>
        
        
        
    </footer>

    <footer class="desktop">
        <nav>
            <a target="_blank" href="https://www.linkedin.com/in/paulinewahle/"> LinkedIn </a>
            <a href="https://www.behance.net/paulinewahle1" target="_blank"> Behance </a>
            <a href="https://dribbble.com/PaulineWahle" target="_blank"> Dribble </a>
            <a target="_blank" href="https://github.com/paulinewahle"> Github </a>
        </nav>
        
        <p class="desktop" id="scrollbutton">Scroll to continue . . .</p>
        <p id="scroll-percentage" class="desktop">
        <span id="percent">0%</span>
        
        </p>
    </footer>
</template>

<style scoped>
@media (min-width: 200px) {
    footer{
        height: 50vh;
        width: 100%;
        justify-content: space-between;
        padding: 10vh 0 1vh 0;
        border: 1px solid red;
    }
    h2, a, p{
        margin: 0 2%;
    }
    h2{
        font-size: 1em;
    }
    a{
        font-size: 1.4em;
        border: none;
        display: inline;
    }
    p{
        text-indent: 0;
    }
    .line{
        margin: 2% 0;
    }
    img{
        margin-top: 5%;
    }
  
}
@media (min-width: 992px){
    footer{
        box-sizing: border-box;
        height: 8vh;
        width: 100vw;
        display: flex;
        align-items: center;
        position: fixed;
        top: 90vh;
        z-index: 100;
    }
    nav{
        width: 25vw;
        display: flex;
        justify-content: space-between;
        margin-left: 5vw;
        font-size: .9em;
    }
    #scrollbutton{
        position: absolute;
        left: 50vw;
    }
    #scroll-percentage{
        position: absolute;
        left: 93vw;
    }
}
    
</style>