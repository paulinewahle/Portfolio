<script lang>
export default{
    mounted() {
        document.querySelector(".arrow-cursor").style.opacity = "0";
        document.querySelector(".text-cursor").style.opacity = "0";
    }
}  
</script>
<template>
    
    <main>
        <h1>404</h1>
        <h2>Page Not Found</h2>
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
    }
    a{
        margin-top: 10%;
    
        font-size: 1.5rem
    }
    h1{
        font-size: 7rem;
    }
    h2{
        font-size: 1.5rem;
    }
}

@media (min-width: 992px) {
    a{
        margin-top: 5%;
        text-decoration: underline;
        font-style: italic;
        font-size: 1.5rem;
    }
    h1{
        font-size: 18rem;
    }
    h2{
        font-size: 6rem;
    }
}

</style>