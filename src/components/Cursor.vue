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
        let blob = document.querySelector(".blob");


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

        // this.links.forEach((link) => {
        // link.addEventListener("mouseleave", () => {
        //     blob.style.scale = 0;
        //     blob.style.filter = "blur(0px)";
        //     mouseCursor.style.scale = 1;
        //     mouseCursor.style.backgroundColor = "black";
        //     document.getElementById("d").style.fill = "black";
        //     mouseCursor.style.mixBlendMode = "normal";
        //     //mouseCursor.style.display = "none";
        //     arrowCursor.style.display = "block";
        // });
        // link.addEventListener("mouseover", () => {
        //     blob.style.scale = 10;
        //     blob.style.filter = "blur(1px)";
        //     mouseCursor.style.backgroundColor = "white";
        //     document.getElementById("d").style.fill = "white";
        //     mouseCursor.style.mixBlendMode = "difference";
        //     arrowCursor.style.display = "none";
        //     mouseCursor.style.display = "block";
        // });
        // });
    },
  
}
</script>


<template>
    <div class="arrow-cursor desktop"></div>
    <div class="text-cursor desktop">scroll</div>
    <div class="cursor desktop">
        <svg class="blob desktop" viewBox="0 0 800 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
            <path id="d" fill="black"> 
            <animate attributeName="d"  dur="4000ms" repeatCount="indefinite" values="
            M432,307Q364,364,307,427.5Q250,491,214.5,406Q179,321,161.5,285.5Q144,250,148,201Q152,152,201,138Q250,124,293,144Q336,164,418,207Q500,250,432,307Z;
            M443.5,327Q404,404,327,449.5Q250,495,177.5,445Q105,395,95.5,322.5Q86,250,128.5,210.5Q171,171,210.5,121.5Q250,72,300.5,110.5Q351,149,417,199.5Q483,250,443.5,327Z;
            M392.5,314.5Q379,379,314.5,394.5Q250,410,186.5,393.5Q123,377,116.5,313.5Q110,250,103,173Q96,96,173,73Q250,50,323,77Q396,104,401,177Q406,250,392.5,314.5Z;                                                    
            M394.5,309Q368,368,309,361Q250,354,178,374Q106,394,115,322Q124,250,112.5,175.5Q101,101,175.5,81Q250,61,297.5,108Q345,155,383,202.5Q421,250,394.5,309Z;
            M432,307Q364,364,307,427.5Q250,491,214.5,406Q179,321,161.5,285.5Q144,250,148,201Q152,152,201,138Q250,124,293,144Q336,164,418,207Q500,250,432,307Z
            ">
            </animate>
            </path>
        </svg>
        
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
        background-color: black;
        border-radius: 50%;
        filter: blur(7px) grayscale(1);  
        transition: scale 0.3s ease-in-out;
        position: fixed;
        z-index: 5;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .blob{
        position: absolute;
        margin-left: 25px;
        transform: scale(1, 1);
        transform-origin: center center;
        filter: blur(7px) grayscale(1);  
        transition: all 0.3s ease-in-out;
        transition-property: scale, filter;
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
    .text-cursor{
        height: 50px;
        position: fixed;
        z-index: 1000;
        pointer-events: none;
        font-size: 1.2em;
        margin-top: -25px;
        margin-left: -20px;
        white-space: nowrap;
        overflow: hidden;
    }
    
}
</style>