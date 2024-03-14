<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    data() {
        return {
        };
    },
    components:{
    },
    created(){

        
    },
    methods: {
    },
}
</script>

<template>
    <div class="container">
        <h2 class="text-center">Error 404 - Not Found</h2>
        <button class="btn btn-primary my-3">  
            <RouterLink class="text-white text-decoration-none" :to="{name: 'home' }">
                Torna alla Homepage
            </RouterLink>
        </button>
    </div>
</template>

<style lang="scss" scoped>
</style>
