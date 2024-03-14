<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    data() {
        return {
            basePath: 'http://127.0.0.1:8000/storage/',
            project: null
        };
    },
    components:{
    },
    created(){

        axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
        .then((response) => {
            if (response.data.success) {
                this.project = response.data.results;
            } else {
            // redirect alla pagina 404
            this.$router.push({ name: 'not-found' })
            }
        });
        
    },
    methods: {
    },
}
</script>

<template>
    <div class="container d-flex justify-content-center">
        <div class="col-auto">
            <div class="card" style="width: 18rem; height: 800px;">
                <div v-if="project.cover_img != null" class="img-container">
                    <img :src="basePath+project.cover_img" class="card-img-top w-100 h-100 object-fit-cover" alt="...">
                </div>
                <div v-else>
                    <h2 class="card-img-top text-center mt-1">Not found</h2>
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{ project.title }}</h5>
                    
                    <p class="card-text">{{ project.description }}</p>
                    <div class="py-1 d-flex flex-wrap">
                        <span v-for="singleTechnology in project.technologies" class="badge text-bg-primary me-1 my-1">{{ singleTechnology.title }}</span>
                    </div>
                    <div class="py-1">
                        <span class="badge text-bg-success">{{ project.type.title }}</span>
                    </div>
                    
                    <button class="btn btn-primary">
                        <RouterLink class="text-white text-decoration-none" :to="{name: 'projects.index' }">
                            Vai all'indice dei progetti
                        </RouterLink>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>
