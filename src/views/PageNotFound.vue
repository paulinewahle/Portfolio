<script lang>
import Footer from '../components/Footer.vue'

export default{
    components: {
    Footer
    },
    mounted() {
        document.querySelector(".arrow-cursor").style.display = "none";
    }
}  
</script>
<template>
    
    <main>
        <div>
            <h1>404</h1>
            <h2>PAGE NOT FOUND</h2>
        </div>
        <router-link to="/home" class="case-card">
            Back To Homepage
        </router-link>
    </main>
    
</template>

<style scoped>
@media (min-width: 200px) {
    main{
        width: 100%;
        height: 70vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow-y: hidden;
        text-align: center;
    }
    a{
        margin-top: 10%;
    }
    h1{
        font-size: 7rem;
        margin: 0;
        line-height: 100%;
    }
    h2{
        font-size: 1.5rem;
    }
}

@media (min-width: 1024px) {
    h1{
        font-size: 15rem;
    }
    main{
        height: 100vh;
    } 
}

</style>