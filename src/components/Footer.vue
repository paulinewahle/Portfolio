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

    
</style>