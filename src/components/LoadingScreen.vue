<script>
export default {
  name: "LoadingScreen",
  data(){
    return {
      id: 1,
    }
  },
  mounted() {
    
    
  }
}

</script>

<template>
    <div id="loading" class="desktop">
      <h1>Pauline <br> Wahle <br> </h1>
      <ul>
        <li>User</li>
        <li>Experience</li>
        <li>Design</li>
      </ul>
    </div>
</template>
  
<style scoped>
@media (min-width: 200px) {
  
}

@media (min-width: 1370px) {
  #loading {
    background-color: var(--background-color);
    position: fixed;
    z-index: 10000000;
    height: 100vh;
    width: 100vw;
    display: flex;
    left: 0;
    top: 0;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
  }
  h1, ul{
    font-size: 1em;
    width: 10vw;
    position: fixed;
    height: 5em;
    line-height: 1.2em;
  }
  h1{
    left: 40vw;
    text-align: end;
    font-family: "Mori Light";
    font-weight: 100;
  }
  ul{
    list-style: none;
    text-indent: none;
    padding: 0;
    left: 51vw;
    font-family: "Mori Bold";
    
  }
  li{
    opacity: 0;
    animation: fadeIn 1s forwards;
    animation-delay: var(--fade-delay);
  }
  
  li:nth-child(1) {
  --fade-delay: .3s;
}

li:nth-child(2) {
  --fade-delay: .6s;
}

li:nth-child(3) {
  --fade-delay: .9s;
}

}
  </style>