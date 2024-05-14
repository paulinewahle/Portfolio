<script>
export default {
  name: "LoadingScreen",
  data(){
    return {
      id: 1,
    }
  },
  mounted() {
    let id = 0
    
    const loadingInterval = setInterval(displayIntroItem, 1500)
    function displayIntroItem() {
      id++
      let item = document.getElementById("intro-loop-item"+id)
      item.style.display = "block"
      setTimeout(() => {
        item.style.display = "none"
      }, 1500)

      if (id>=6){
      clearInterval(loadingInterval)
      }
    }
    
  }
}

</script>

<template>
    <div id="loading" class="desktop">
      <ul>
        <li class="intro-loop-item" id="intro-loop-item1">
          Design Concepts
        </li>
        <li class="intro-loop-item" id="intro-loop-item2">
          User Experience
        </li>
        <li class="intro-loop-item" id="intro-loop-item3">
          Web Design
        </li>
        <li class="intro-loop-item" id="intro-loop-item4">
          Frontend Development
        </li>
        <li class="intro-loop-item" id="intro-loop-item5">
          Graphic Design
        </li>
        <li class="intro-loop-item" id="intro-loop-item6">
          Digital Interfaces
        </li>
      </ul>
    </div>
</template>
  
<style scoped>
@media (min-width: 200px) {
  
}

@media (min-width: 992px) {
  #loading {
    position: fixed;
    z-index: 10000000;
    background-color: #fafafa;
    height: 100vh;
    width: 100vw;
    display: flex;
    left: 0;
    top: 0;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
  }
  ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: inline;
    text-align: center;
  }
  .intro-loop-item{
    display: none;
    position: relative;
    animation: fade 2s;
  }
  li{
    font-family: "serif", serif;
    src: url('./fonts/Butler/Butler_Light.otf')  format('opentype');
  }
  @keyframes fade{
    0%   {
      filter: blur(5px);
      opacity: 0;
    }
    50%  {
      filter: blur(0px);
      opacity: 1;
    }
    100% {
      filter: blur(5px);
      opacity: 0;
    }
  }
}
  </style>