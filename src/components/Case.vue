<script lang>
import { RouterLink } from 'vue-router';


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
        caseroles: String,
        casestakeholders: String,
        casetools: String,
        casemore: String,
        
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
  // methods:{ 
  //   hideElement(content, imgId, vidId) {
  //     if (content && content.includes('.mp4')) {
  //       document.querySelector(imgId).style.display = 'none';
  //       document.querySelector(vidId).style.display = 'block';
  //     } else if (content && (content.includes('.jpg') || content.includes('.png'))) {
  //       document.querySelector(vidId).style.border = 'blue 4px solid';
  //       document.querySelector(imgId).style.display = 'block';
  //     } else {
  //       document.querySelector(imgId).style.display = 'none';
  //       document.querySelector(vidId).style.display = 'none';
  //     }
  //   }
    
  // },
  mounted(){
    document.querySelector(".text-cursor").style.display = "none";

    document.querySelector("#page-container").style.display = "block";
    document.querySelector("#page-container").style.opacity = "1";
    document.querySelector(".arrow-cursor").style.display = "block";
    document.querySelector(".text-cursor").style.display = "none";
    

    const hideArrowCursor = () => {
      document.querySelector(".cursor").style.scale = "1";
      document.querySelector(".arrow-cursor").style.opacity = "0";
    }
    const pageArrowCursor = () => {
      document.querySelector(".arrow-cursor").style.opacity = "1";
      document.querySelector(".cursor").style.scale = "0";
    }

    document.querySelector("#page-container").addEventListener("mouseover", pageArrowCursor);
    document.querySelector("#page-container").addEventListener("mouseleave", hideArrowCursor);
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

    

    // this.hideElement(this.content1, "#img1", "#vid1");
    // this.hideElement(this.content2, "#img2", "#vid2");
    // this.hideElement(this.content3, "#img3", "#vid3");
    // this.hideElement(this.content4, "#img4", "#vid4");
    // this.hideElement(this.content5, "#img5", "#vid5");
    // this.hideElement(this.content6, "#img6", "#vid6");
    // this.hideElement(this.content7, "#img7", "#vid7");



  },
  
  
}

</script>

<template>

  <div class="responsive">

   
  <h1>{{casename}}</h1> 
  <h4>{{casetype}}</h4>
  <p>{{casetext}}</p>

  <a :href="caselink" download> {{caselinktext}}</a>

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
    
      <div id="page-numbers">
          <button @click="page2 = false; page3 = false; page4 = false; page5 = false; page6 = false; page7 = false; page1 = true;" id="page-number-1">1</button>  <div v-if="page1" class="number-text"> <div class="number-line"> </div> <p>{{pagetitle1}} </p> </div>
          <button @click="page1 = false; page3 = false; page4 = false; page5 = false; page6 = false; page7 = false; page2 = true;" id="page-number-2">2 </button> <div v-if="page2" class="number-text"> <div class="number-line"> </div> <p>{{pagetitle2}} </p> </div>
          <button @click="page1 = false; page2 = false; page4 = false; page5 = false; page6 = false; page7 = false; page3 = true;" id="page-number-3">3</button>  <div v-if="page3" class="number-text"> <div class="number-line"> </div> <p>{{pagetitle3}} </p></div>
          <button @click="page1 = false; page2 = false; page3 = false; page5 = false; page6 = false; page7 = false; page4 = true;" id="page-number-4">4</button>  <div v-if="page4" class="number-text"> <div class="number-line"> </div> <p>{{pagetitle4}} </p> </div>
          <button @click="page1 = false; page2 = false; page3 = false; page4 = false; page6 = false; page7 = false; page5 = true;" id="page-number-5">5</button>  <div v-if="page5" class="number-text"> <div class="number-line"> </div> <p>{{pagetitle5}} </p></div>
          <button @click="page1 = false; page2 = false; page3 = false; page4 = false; page5 = false; page7 = false; page6 = true;" id="page-number-6">6</button>  <div v-if="page6" class="number-text"> <div class="number-line"> </div> <p>{{pagetitle6}} </p> </div>
          <button @click="page1 = false; page2 = false; page3 = false; page4 = false; page5 = false; page6 = false; page7 = true;" id="page-number-7">7</button>  <div v-if="page7" class="number-text"> <div class="number-line"> </div> <p>{{pagetitle7}} </p> </div>
      </div>

      <RouterLink to="/home#work" id="back">BACK</RouterLink>
      

      <div id="page-container">
        <Transition :name="this.currentTransition">
        <div v-if="page1" class="page" id="page1">
          <video v-if="content1 && content1.includes('.mp4')" autoplay loop muted>
            <source :src="content1" type="video/mp4">
          </video>
          <img v-if="content1 && (content1.includes('.jpg') || content1.includes('.png'))" :src="content1" alt="">
        </div>
        </Transition>
        <Transition :name="this.currentTransition">
        <div v-if="page2" class="page" id="page2">
          <div id="descr"> <h3>{{casetype}}</h3> <p>{{casetext}}</p> <a :href="caselink" download> {{caselinktext}}</a></div>
          <video v-if="content2 && content2.includes('.mp4')" autoplay loop muted class="small">
            <source :src="content2" type="video/mp4">
          </video>
          <img v-if="content2 && (content2.includes('.jpg') || content2.includes('.png'))" :src="content2" alt="" class="small">
        </div>
        </Transition>
        <Transition  :name="this.currentTransition">
        <div v-if="page3" class="page" id="page3">
          
          <video  v-if="content3 && content3.includes('.mp4')" autoplay loop muted>
            <source :src="content3" type="video/mp4">
          </video>
          <img v-if="content3 && (content3.includes('.jpg') || content3.includes('.png'))" :src="content3" alt="">
        </div>
        </Transition>
        <Transition :name="this.currentTransition">
        <div v-if="page4" class="page" id="page4">
          <div id="descr"> 
            <h3>Roles</h3> <span>{{caseroles}}</span>
            <h3>Stakeholders</h3> <span>{{casestakeholders}}</span>
            <h3>Tools</h3> <span>{{casetools}}</span>
          </div>
          <video  v-if="content4 && content4.includes('.mp4')" autoplay loop muted class="small">
            <source :src="content4" type="video/mp4">
          </video>
          <img v-if="content4 && (content4.includes('.jpg') || content4.includes('.png'))" :src="content4" alt="" class="small">
        </div>
        </Transition>
        <Transition :name="currentTransition">
        <div v-if="page5" class="page" id="page5">
         
          <video  v-if="content5 && content5.includes('.mp4')" autoplay loop muted >
            <source :src="content5" type="video/mp4">
          </video>
          <img v-if="content5 && (content5.includes('.jpg') || content5.includes('.png'))" :src="content5" alt="">
        </div>
        </Transition>
        <Transition :name="this.currentTransition">
        <div v-if="page6" class="page" id="page6">
          <div id="descr"> <p>{{casemore}}</p> <a :href="caselink" download> {{caselinktext}}</a></div>
          <video  v-if="content6 && content6.includes('.mp4')" autoplay loop muted class="small">
            <source :src="content6" type="video/mp4">
          </video>
          <img v-if="content6 && (content6.includes('.jpg') || content6.includes('.png'))" :src="content6" alt="" class="small">
        </div>
        </Transition>
        <Transition :name="this.currentTransition">
        <div v-if="page7" class="page" id="page7">
          <video  v-if="content7 && content7.includes('.mp4')" autoplay loop muted>
            <source :src="content7" type="video/mp4">
          </video>
          <img v-if="content7 && (content7.includes('.jpg') || content7.includes('.png'))" :src="content7" alt="">
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
  h4{
    font-family: 'Serif', serif;
  }
}
@media (min-width: 992px) {

#page-container{
  box-sizing: border-box;
  overflow: hidden;
  top: 10vh;
  height: 80vh;
  width: 100vw;
  position: absolute;
}
.page{
  position: absolute;
  box-sizing: border-box;
  overflow: hidden;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
}
img, video{
  /* height: auto; */
  width: 100%;
  object-fit: contain;
  padding: 0 1%;
}
.small{
  width: 75%;
  height: 100%;
}
#descr{
  height: 100%;
  min-width: 15vw;
  margin: 0 5vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
#descr span{
  word-spacing: 100vw;
}
#descr h3{
  font-family: 'Ade', serif;
  text-transform: uppercase;
  font-weight: 100;
  margin-bottom: 0;
}
#page-numbers{
    position: fixed;
    top: 90vh;
    left: 50vw;
    width: 30%;
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 1em;
    height: 10vh;
  }
  button{
    border: none;
    margin: 1%;
    width: 1vw;
    display: flex;
    align-items: center;
    transition: 1s all ease;
    font-size: 1.2em;
    background: none;
    color: var(--text-color);
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
    font-weight: 100;
    font-family: "Ade", serif;
  }
  .number-line{
    height: 1px;
    width: 20%;
    margin: 0 5%;
    background-color: var(--text-color);
  }
  @keyframes expand{
    from{
      width: 0%;
    }
    to{
      width: 40%;
    }
  }
  #back{
    position: fixed;
    top: 90vh;
    left: 5vw;
    height: 10vh;
    display: flex;
    align-items: center;
  }


}



</style>
