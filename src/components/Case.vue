<script lang>

export default {
    props: {
        pagetitle1: String,
        pagetitle2: String,
        pagetitle3: String,
        pagetitle4: String,
        pagetitle5: String,
        pagetitle6: String,
        pagetitle7: String,
        casename: String,
        casetext: String,
        casetype: String,
        caselink: String,
        caselinktext: String,
        content1: String,
        content2: String,
        content3: String,
        content4: String,
        content5: String,
        content6: String,
        content7: String,
    },
  data() {
    return {
      page1: true,
      page2: false,
      page3: false,
      page4: false,
      page5: false,
      page6: false,
      page7: false,
      currentTransition: '',
    }
  },
  methods:{ 
    hideElement(content, imgId, vidId) {
      if (content.includes('.mp4')) {
        document.querySelector(imgId).style.display = 'none';
      } 
      else if (content.includes('.jpg') || content.includes('.png')) {
        document.querySelector(vidId).style.display = 'none';
      }
    }
    
  },
  mounted(){
    document.querySelector(".text-cursor").style.display = "none";

    document.querySelector("#page-container").style.display = "block";
    document.querySelector("#page-container").style.opacity = "1";
    document.querySelector(".arrow-cursor").style.display = "block";
    document.querySelector(".text-cursor").style.display = "none";
    

    const hideArrowCursor = () => {
      document.querySelector(".arrow-cursor").style.opacity = "0";
      document.querySelector(".cursor").style.scale = "1";
    }
    const pageArrowCursor = () => {
      document.querySelector(".arrow-cursor").style.opacity = "1";
      document.querySelector(".cursor").style.scale = "0";
    }

    document.querySelector("#page-container").addEventListener("mouseover", pageArrowCursor);
    document.querySelector("#page-container").addEventListener("mouseleave", hideArrowCursor);
    document.querySelector("#descr").addEventListener("mouseover", hideArrowCursor);
    document.querySelector("#descr").addEventListener("mouseleave", pageArrowCursor);
    // document.querySelector("#page-numbers").addEventListener("mouseover", hideArrowCursor);
    // document.querySelector("#page-numbers").addEventListener("mouseleave", pageArrowCursor);
    // document.querySelector(".back").addEventListener("mouseover", hideArrowCursor);
    // document.querySelector(".back").addEventListener("mouseleave", pageArrowCursor);


    const mouseDown = (e) => {
        let x = e.clientX;
        let screenHalf = window.screen.width/2
        if(x < screenHalf){
          this.currentTransition = 'left';
          if(this.page1 === true){
            this.page1 = false,
            this.page7 = true
          }
          else if(this.page2 === true){
            this.page2 = false,
            this.page1 = true
          }
          else if(this.page3 === true){
            this.page3 = false,
            this.page2 = true
          }
          else if(this.page4 === true){
            this.page4 = false,
            this.page3 = true
          }
          else if(this.page5 === true){
            this.page5 = false,
            this.page4 = true
          }
          else if(this.page6 === true){
            this.page6 = false,
            this.page5 = true
          }
          else if(this.page7 === true){
            this.page7 = false,
            this.page6 = true
          }
        }
        else if(x > screenHalf){
          this.currentTransition = 'right';
          if(this.page1 === true){
            this.page1 = false,
            this.page2 = true
          }
          else if(this.page2 === true){
            this.page2 = false,
            this.page3 = true
          }
          else if(this.page3 === true){
            this.page3 = false,
            this.page4 = true
          }
          else if(this.page4 === true){
            this.page4 = false,
            this.page5 = true
          }
          else if(this.page5 === true){
            this.page5 = false,
            this.page6 = true
          }
          else if(this.page6 === true){
            this.page6 = false,
            this.page7 = true
          }
          else if(this.page7 === true){
            this.page7 = false,
            this.page1 = true
          }
        }    
             
    }
    
  
    const pageContainer = document.getElementById("page-container");
    pageContainer.addEventListener("click", mouseDown);

    

    this.hideElement(this.content1, "#img1", "#vid1");
    this.hideElement(this.content2, "#img2", "#vid2");
    this.hideElement(this.content3, "#img3", "#vid3");
    this.hideElement(this.content4, "#img4", "#vid4");
    this.hideElement(this.content5, "#img5", "#vid5");
    this.hideElement(this.content6, "#img6", "#vid6");
    this.hideElement(this.content7, "#img7", "#vid7");



  },
  
  
}

</script>

<template>

  <div class="responsive">

   
  <h1>{{casename}}</h1> 
  <h4>{{casetype}}</h4>
  <p>{{casetext}}</p>

  <a :href="caselink" download> {{caselinktext}}</a>
  <router-link to="/work" class="work-link">BACK</router-link>

    <div class="responsive">

      <video id="vid1" autoplay loop muted>
        <source :src="content1"  type="video/mp4">
      </video>
      <img id="img1" :src="content1" alt="">

      <video id="vid2" autoplay loop muted>
        <source :src="content2" type="video/mp4">
      </video>
      <img id="img2" :src="content2" alt="">

      <video id="vid3" autoplay loop muted>
        <source :src="content3" type="video/mp4">
      </video>
      <img id="img3" :src="content3" alt="">

      <video id="vid4" autoplay loop muted>
        <source :src="content4" type="video/mp4">
      </video>
      <img id="img4" :src="content4" alt="">

      <video id="vid5" autoplay loop muted>
        <source :src="content5" type="video/mp4">
      </video>
      <img id="img5" :src="content5" alt="">

      <video id="vid6" autoplay loop muted>
        <source :src="content6" type="video/mp4">
      </video>
      <img id="img6" :src="content6" alt="">

      <video id="vid7" autoplay loop muted>
        <source :src="content7" type="video/mp4">
      </video>
      <img id="img7" :src="content7" alt="">


    </div>
  </div>
  <div class="desktop">
    
    <div id="descr">
      <div>
        
        <h1>{{casename}}</h1>
        <h4>{{casetype}}</h4>
        <p>{{casetext}}</p>
        <a :href="caselink" download> {{caselinktext}} </a>
      </div>
        <router-link to="/home#work" class="back"> Back to selected work</router-link>

        <div id="page-numbers">
        <button @click="page2 = false; page3 = false; page4 = false; page5 = false; page6 = false; page7 = false; page1 = true;" id="page-number-1">1</button>  <div v-if="page1" class="number-text"> <div class="number-line"> </div> {{pagetitle1}} </div>
        <button @click="page1 = false; page3 = false; page4 = false; page5 = false; page6 = false; page7 = false; page2 = true;" id="page-number-2">2 </button> <div v-if="page2" class="number-text"> <div class="number-line"> </div> {{pagetitle2}} </div>
        <button @click="page1 = false; page2 = false; page4 = false; page5 = false; page6 = false; page7 = false; page3 = true;" id="page-number-3">3</button>  <div v-if="page3" class="number-text"> <div class="number-line"> </div> {{pagetitle3}} </div>
        <button @click="page1 = false; page2 = false; page3 = false; page5 = false; page6 = false; page7 = false; page4 = true;" id="page-number-4">4</button>  <div v-if="page4" class="number-text"> <div class="number-line"> </div> {{pagetitle4}} </div>
        <button @click="page1 = false; page2 = false; page3 = false; page4 = false; page6 = false; page7 = false; page5 = true;" id="page-number-5">5</button>  <div v-if="page5" class="number-text"> <div class="number-line"> </div> {{pagetitle5}} </div>
        <button @click="page1 = false; page2 = false; page3 = false; page4 = false; page5 = false; page7 = false; page6 = true;" id="page-number-6">6</button>  <div v-if="page6" class="number-text"> <div class="number-line"> </div> {{pagetitle6}} </div>
        <button @click="page1 = false; page2 = false; page3 = false; page4 = false; page5 = false; page6 = false; page7 = true;" id="page-number-7">7</button>  <div v-if="page7" class="number-text"> <div class="number-line"> </div> {{pagetitle7}} </div>
       </div>
    </div>

      

    <div id="page-container">
        <Transition :name="this.currentTransition">
        <div v-if="page1" class="page" id="page1">
          <video  autoplay loop muted>
            <source :src="content1" type="video/mp4">
          </video>
          <img :src="content1" alt="">
        </div>
        </Transition>
        <Transition :name="this.currentTransition">
        <div v-if="page2" class="page" id="page2">
          <video  autoplay loop muted>
            <source :src="content2" type="video/mp4">
          </video>
          <img :src="content2" alt="">
        </div>
        </Transition>
        <Transition  :name="this.currentTransition">
        <div v-if="page3" class="page" id="page3">
          <video  autoplay loop muted>
            <source :src="content3" type="video/mp4">
          </video>
          <img :src="content3" alt="">
        </div>
        </Transition>
        <Transition :name="this.currentTransition">
        <div v-if="page4" class="page" id="page4">
          <video  autoplay loop muted>
            <source :src="content4" type="video/mp4">
          </video>
          <img :src="content4" alt="">
        </div>
        </Transition>
        <Transition :name="currentTransition">
        <div v-if="page5" class="page" id="page5">
          <video  autoplay loop muted>
            <source :src="content5" type="video/mp4">
          </video>
          <img :src="content5" alt="">
        </div>
        </Transition>
        <Transition :name="this.currentTransition">
        <div v-if="page6" class="page" id="page6">
          <video  autoplay loop muted>
            <source :src="content6" type="video/mp4">
          </video>
          <img :src="content6" alt="">
        </div>
        </Transition>
        <Transition :name="this.currentTransition">
        <div v-if="page7" class="page" id="page7">
          <video  autoplay loop muted>
            <source :src="content7" type="video/mp4">
          </video>
          <img :src="content7" alt="">
        </div>
        </Transition>
    </div>
    
  </div>

</template>

<style scoped>
@media (min-width: 200px) {
  .responsive{
    margin-top: 10vh;
  }
  
  img, video{
    height: auto;
    width: 80vw;
    margin: 1vh 0;
  }
  h1{
    margin-top: 20vh;
  }
}
@media (min-width: 992px) {

  #descr{
    position: absolute;
    z-index: 100;
    margin: 0;
    top: 15vh;
    width: 25vw;
    height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  h1{
    margin: 20% 0 5vh 0;
  }
  a{
    font-style: italic;
    text-decoration: underline;
  }
  
  
  #page-container{
    box-sizing: border-box;
    overflow: hidden;
    top: 10vh;
    left: 30vw;
    height: 80vh;
    width: 65vw;
    position: absolute;
  }
  .page{
    position: absolute;
    box-sizing: border-box;
    overflow: hidden;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    width: 100%;
  }
  img, video{
    height: 100%;
    width: auto;
    margin: 0;
  }

  #page-numbers{
    position: fixed;
    top: 75vh;
    left: 5vw;
    width: 25vw;
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 1em;

  }
  button{
    border: none;
    margin: 1%;
    width: 1vw;
    display: flex;
    align-items: center;
    transition: 1s all ease;
    font-size: 1.2em;
    font-family: 'Serif', serif;

  }
  .number-text{
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.2em;
    width: 40%;
    overflow: hidden;
    white-space: nowrap;
    animation: expand 1s;
    font-family: 'Serif', serif;
    font-style: italic;
  }
  .number-line{
    height: 1px;
    width: 20%;
    margin: 0 5%;
    background-color: #272727;
  }
  @keyframes expand{
    from{
      width: 0%;
    }
    to{
      width: 40%;
    }
  }
  .back{
    display: block;
    margin-top: 15vh;
    text-decoration: none; 
    font-size: 1em;
  }

  

}

</style>
