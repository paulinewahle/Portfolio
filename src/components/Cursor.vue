<script>

export default{
    props:{
        links: Array,
      },
    components: {
    },
    mounted(){

        let mouseCursor = document.querySelector(".cursor");
        let textCursor = document.querySelector(".text-cursor");
        let arrowCursor = document.querySelector(".arrow-cursor");


        window.addEventListener("mousemove", mouseFollow);
        function mouseFollow(e) {
        mouseCursor.style.left = e.clientX + "px";
        mouseCursor.style.top = e.clientY + "px";
        arrowCursor.style.left = e.clientX + "px";
        arrowCursor.style.top = e.clientY + "px";
        textCursor.style.left = e.clientX + "px";
        textCursor.style.top = e.clientY + "px";


        


        let rightScreen = window.screen.width/2
        let leftScreen = window.screen.width/2
        if(e.pageX < rightScreen){
            document.querySelector(".arrow-cursor").classList.add("left");
            document.querySelector(".arrow-cursor").classList.remove("right");
        }
        else if(e.screenX > leftScreen){
            document.querySelector(".arrow-cursor").classList.add("right");
            document.querySelector(".arrow-cursor").classList.remove("left");
        }

        }

    },
  
}
</script>


<template>
    <div class="arrow-cursor desktop"></div>
    <div class="text-cursor desktop"><p>scroll</p></div>
    <div class="cursor desktop">
    </div>
  
</template>


<style scoped>
@media (min-width: 200px) {
    
}

@media (min-width: 992px) {
    .cursor {
        left: 0;
        top: 0;
        width: 30px;
        height: 30px;
        margin-top: -15px;
        margin-left: -15px;
        pointer-events: none;
        background-color: white;
        border-radius: 50%;
        filter: blur(7px) grayscale(1);  
        transition: scale 0.3s ease-in-out;
        position: fixed;
        z-index: 500;
        mix-blend-mode: difference;
    }

    .arrow-cursor{
        display: block;
        filter: blur(0px);
        position: fixed;
        z-index: 1001;
        pointer-events: none;
        text-transform: uppercase;
        width: 80px;
        height: 80px;
        transform: rotate(45deg);
        margin-top: -40px;
        margin-left: -40px;
        background-color: black;
        mix-blend-mode: difference;
        filter: grayscale(1);
    }
    .left{
        border-left: 2px solid black;
        border-bottom: 2px solid black;
        box-shadow: -2px 2px 0 0px #fafafa;
    }
    .right{
        border-right: 2px solid black;
        border-top: 2px solid black;
        box-shadow: 2px -2px 0 0px #fafafa;
    }
    /* .text-cursor{
        display: flex;
        justify-content: center;
        align-items: center;
        left: 0;
        top: 0;
        width: 80px;
        height: 80px;
        margin-top: -40px;
        margin-left: -40px;
        position: fixed;
        z-index: 1000;
        pointer-events: none;
        font-size: 13px;
        font-style: italic;
        white-space: nowrap;
        border: 1px solid var(--text-color);
        border-radius: 50%;
    } */
    .text-cursor p{
        height: auto;
        text-align: center;

        /* border: 1px solid; */
    }
    
}
</style>