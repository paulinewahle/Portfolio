<script>
    import ThemeToggle from '../components/ThemeToggle.vue';

export default{
    name: 'Cursor',
    props:{
        links: Array,
      },
    components: {
        ThemeToggle
    },
    data() {
        return {
            target: null,
            allLinks: null
        };
    },

    mounted(){
        //setTimeout(console.log('CursorLinks1:', this.links), 1000);
        setTimeout(() => {
            console.log('CursorLinks2:', this.links);
            this.links.forEach((link) => {
                link.addEventListener("mouseover", () => {
                    console.log("hoverliunk");
                    mouseCursor.style.scale = 3;
                });
                link.addEventListener("mouseleave", () => {
                    mouseCursor.style.scale = 1;
                });
            });
        }, 1);
        

        let mouseCursor = document.querySelector(".cursor");
        let textCursor = document.querySelector(".text-cursor");
        let arrowCursor = document.querySelector(".arrow-cursor");
        const target = document.querySelector(".theme-toggle");
        const stickDistance = 40; 

        window.addEventListener("mousemove", mouseFollow);
        
        function mouseFollow(e) {
            
        const cursorX = e.clientX;
        const cursorY = e.clientY;
        const targetRect = target.getBoundingClientRect();
        const targetX = targetRect.left + targetRect.width / 2;
        const targetY = targetRect.top + targetRect.height / 2;
        const distanceX = cursorX - targetX;
        const distanceY = cursorY - targetY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        // mouseCursor.style.left = e.clientX + "px";
        // mouseCursor.style.top = e.clientY + "px";
        arrowCursor.style.left = e.clientX + "px";
        arrowCursor.style.top = e.clientY + "px";
        // textCursor.style.left = e.clientX + "px";
        // textCursor.style.top = e.clientY + "px";


        let rightScreen = window.screen.width/2
        let leftScreen = window.screen.width/2

        // Arrow cursor
        if(e.pageX < rightScreen){
            document.querySelector(".arrow-cursor").classList.add("left");
            document.querySelector(".arrow-cursor").classList.remove("right");
        }
        else if(e.screenX > leftScreen){
            document.querySelector(".arrow-cursor").classList.add("right");
            document.querySelector(".arrow-cursor").classList.remove("left");
        }

        if (distance < stickDistance) {
        mouseCursor.style.left = `${targetX}px`;
        mouseCursor.style.top = `${targetY}px`;
        window.addEventListener("click", ThemeToggle.toggleTheme);
        }else {
        // Follow the cursor normally
        mouseCursor.style.left = `${cursorX}px`;
        mouseCursor.style.top = `${cursorY}px`;
        }
        }
        
 
        


    },
    methods:{
        
    }
  
}
</script>


<template>
    <div class="arrow-cursor desktop"></div>
    <!-- <div class="text-cursor desktop"><p>scroll</p></div> -->
    <div class="cursor desktop"> </div>
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
        transform: translate(-50%, -50%);
        pointer-events: none;
        background-color: white;
        border-radius: 50%;
        filter: grayscale(1);  
        transition: scale 0.3s ease-in-out;
        position: fixed;
        z-index: 500;
        mix-blend-mode: difference;
        transform-origin: top left;
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