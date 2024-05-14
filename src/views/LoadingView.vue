<script>
import LoadingScreen from "@/components/LoadingScreen.vue"
import HomeView from "@/views/HomeView.vue"

export default{
    components: {
        LoadingScreen,
        HomeView
    },
    data(){
        return {
            isLoading: true,
        }
    },
    mounted(){
        setTimeout(() => {
        this.isLoading = false
      }, 20000)
    }
}
</script>

<template>
    <Transition name="fade">
        <LoadingScreen v-if="isLoading === true"/>
    </Transition>
    <HomeView/>
    
</template>
