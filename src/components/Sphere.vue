<script>
import '@/assets/main.css';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import * as dat from 'dat.gui'; 
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
// import { mergeWithCustomize } from 'webpack-merge';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { vShow } from 'vue';




export default{

   mounted(){
        
    const hdrTextureURL = new URL('../assets/img/mymind2.hdr', import.meta.url);
    
    //Loading
    const textureLoader = new THREE.TextureLoader();
    const normalMap = new URL('../assets/img/Lava.png', import.meta.url);
    const normalTexture = textureLoader.load(normalMap);
    

    // Canvas
    const canvas = document.querySelector('canvas.webgl')

    // Scene
    const scene = new THREE.Scene()


    // Objects
    const geometry = new THREE.SphereGeometry( 1, 64, 32 );

    // Materials
    const material = new THREE.MeshPhysicalMaterial({
        //emissive: 0x707070,
        wireframe: false,
        metalness: 1,
        roughness: 0,
        // envMapIntensity: 1,
        clearcoat: .1,
        clearcoatRoughness: 0,
        transparent: true,
        opacity: 0.5,
        transmission: .001,
        reflectivity: 1,
        ior: 0.9,
        side: THREE.DoubleSide
        // normalMap: normalTexture
    })


    // Mesh
    const sphere = new THREE.Mesh( geometry, material );
    scene.add(sphere)


    // Lights

    const light = new THREE.DirectionalLight(0xffffff, 1.5);
    light.position.set(5, 5, -10);
    light.target.position.set(-5, 0, 0);
    scene.add(light);
    scene.add(light.target);


    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.x = 2
    pointLight.position.y = 3
    pointLight.position.z = 4
    scene.add(pointLight)

    /**
     * Sizes
     */
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    window.addEventListener('resize', () =>
    {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight

        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    camera.position.x = 0
    camera.position.y = 0
    camera.position.z = 2
    scene.add(camera)

    // Controls
    
    class CustomOrbitControls extends OrbitControls {
    constructor(camera, canvas) {
        super(camera, canvas);

        // Disable zoom (scroll) functionality
        this.enableZoom = false;

        
    }
    }

    const controls = new CustomOrbitControls(camera, canvas)
    controls.enableDamping = true

    

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    //hdr decoding
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.8;

    //RGBELoader
    const loader = new RGBELoader();
    loader.load(hdrTextureURL, function(texture){
        texture.mapping = THREE. EquirectangularReflectionMapping;
        //scene.background = texture;
        scene.environment = texture;
    })

    /**
     * Animate
     */

    const clock = new THREE.Clock()

    const tick = () =>
    {

        const elapsedTime = clock.getElapsedTime()

        // Update objects
        sphere.rotation.y = .1 * elapsedTime

        // Update Orbital Controls
        controls.update()

        // Render
        renderer.render(scene, camera)

        // Call tick again on the next frame
        window.requestAnimationFrame(tick)
    }

    tick()

        ////////
        gsap.registerPlugin(ScrollTrigger); 

        gsap.to(sphere.rotation, {
            scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom top",
            duration: 2.5, 
            yoyoEase: true,
            scrub: true,
            toggleActions: "restart pause reverse none"
        },
            y: Math.PI
        });
        gsap.to(sphere.material, {
            scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom top",
            duration: 2.5, 
            yoyoEase: true,
            scrub: true,
            toggleActions: "restart pause reverse none"
        },
            opacity: 0,
        });
        gsap.to(".webgl", {
            scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "center top",
            duration: 2.5, 
            yoyoEase: true,
            scrub: true,
            toggleActions: "restart pause reverse none",
        },
            scale: 3
        });

 
   }
   

}



</script>

<template>
 
<body>
    

    <main class="desktop">
        <canvas class="webgl"></canvas>
    </main>
    
</body>

</template>

<style scoped>
body{
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0vh;
}
.webgl{
    position: fixed;
    top: 0;
    left: 0;
    outline: none;
    z-index: 2;
    pointer-events: none;
}



</style>
