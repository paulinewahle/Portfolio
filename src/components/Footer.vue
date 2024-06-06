<script lang>
export default{
    
    mounted() {
    const percentLabel = document.querySelector("#percent");
      window.addEventListener("scroll", () => {
        let scrollTop = window.scrollY;
        let docHeight = document.documentElement.scrollHeight; 
        let winHeight = window.innerHeight;
        let scrollPercent = scrollTop / (docHeight - winHeight);
        let scrollPercentRounded = Math.min(100, Math.round(scrollPercent * 100));
        document.body.innerHTML = `${scrollPercentRounded}%`;
        console.log(scrollPercentRounded);
      });
    }
}

</script>

<template>
    <footer class="responsive">

        <RouterLink to="/about"> About </RouterLink>
        <RouterLink to="/work"> Work </RouterLink>

        <div>
            <span>
                <p>Experience</p>
                <a target="_blank" href="https://linkedin.com/in/paulinewahle"> LinkedIn</a>
            </span>
            <span>
                <p>Design</p>
                <div class="links">
                    <a target="_blank" href="https://dribbble.com/PaulineWahle"> Dribble </a>
                    <a target="_blank" href="https://www.behance.net/paulinewahle1"> Behance </a>
                    <a target="_blank" href="https://www.pinterest.de/PaulineWahle/"> Pinterest </a>
                </div>
            </span>
            <span>
                <p>Code</p>
                <div class="links">
                    <a target="_blank" href="https://github.com/paulinewahle"> Github </a>
                    <a target="_blank" href="https://codepen.io/PaulineWahle"> CodePen</a>
                </div>
            </span>
            <span>
                <p>Awards</p>
                <a href="https://www.webguruawards.com/sites/paulinewahle-com" target="_blank" class="about-link"> WebGuru Awards</a>
            </span>
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
@media (max-width: 1024px) {
    footer{
        width: 100%;
        margin: 10vh 0 1vh 0;
        border-top: 1px solid var(--text-color);
    }
    span{
        color: var(--text-color);
        display: block;
        border-top: 1px solid var(--text-color);
        padding: 1% 0;
        display: flex;
        align-items: baseline;
    }
    p, a{
        display: inline-block;
        min-width: 40vw;
        margin: 0;
    }
  
}
@media (min-width: 1024px){
    footer{
        box-sizing: border-box;
        height: 8vh;
        width: 100vw;
        display: flex;
        align-items: center;
        position: fixed;
        top: 90vh;
        z-index: 100;
        margin: 0;
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