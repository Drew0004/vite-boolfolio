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
        <h2 class="text-center text-success">Dati inviati con successo!</h2>
        <div class="text-center my-3">
            <button class="btn btn-secondary">  
                <RouterLink class="text-white text-decoration-none" :to="{name: 'home' }">
                    Torna alla Homepage
                </RouterLink>
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>
