<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    data() {
        return {
            projects: [],
            currentPage: 1,
            lastPage: 3, 
        };
    },
    components:{
        ProjectCard
    },
    created(){
        this.getDataFromApi(this.currentPage);
    },
    methods: {
        getDataFromApi(page){
            axios.get('http://127.0.0.1:8000/api/projects',
            {
                params:{
                page : page
                }
            })
            .then((response)=>{
                this.projects = response.data.results.data;
                console.log(this.projects);

            }); 
        },
        
        goToPrevPage(){
            if (this.currentPage > 1) {
                this.getDataFromApi(--this.currentPage)
            }
        },

        goToNextPage(){
            if (this.currentPage < this.lastPage){
                this.getDataFromApi(++this.currentPage)
            }
        }
    },
}
</script>

<template>
    <main>
        <h1 class="text-center py-5">Tutti i progetti</h1>
        <div class="container">
            <button class="btn btn-secondary my-3">  
                <RouterLink class="text-white text-decoration-none" :to="{name: 'home' }">
                    Torna alla Homepage
                </RouterLink>
            </button>
            <div class="row">
                <ProjectCard v-for="(singleProject, i) in projects" :key="i" :singleProject="singleProject"/>
                <div class="my-3">
                    <button @click="goToPrevPage()" class="col-1 btn btn-success me-3 ">Previous</button>
                    <button @click="goToNextPage()" class="col-1 btn btn-primary ">Next</button>
                </div>
            </div>

        </div>
    </main>
</template>

<style lang="scss" scoped>
</style>
