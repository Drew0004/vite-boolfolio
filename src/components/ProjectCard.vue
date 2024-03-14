<script>
export default {
    data() {
        return {
            basePath: 'http://127.0.0.1:8000/storage/'
        };
    },
    methods: {

    },
    props:{
        singleProject: Object,
    }
}
</script>

<template>
        <div class="col-auto">
            <div class="card" style="width: 18rem; height: 800px;">
                <div v-if="singleProject.cover_img != null" class="img-container">
                    <img :src="basePath+singleProject.cover_img" class="card-img-top w-100 h-100 object-fit-cover" alt="...">
                </div>
                <div v-else>
                    <h2 class="card-img-top text-center mt-1">Not found</h2>
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{ singleProject.title }}</h5>
                    
                    <p class="card-text">{{ singleProject.description }}</p>
                    <div class="py-1 d-flex flex-wrap">
                        <span v-for="singleTechnology in singleProject.technologies" class="badge text-bg-primary me-1 my-1">{{ singleTechnology.title }}</span>
                    </div>
                    <div class="py-1">
                        <span class="badge text-bg-success">{{ singleProject.type.title }}</span>
                    </div>
                    
                    <button class="btn btn-primary">
                        <RouterLink class="text-white text-decoration-none" :to="{name: 'projects.show', params:{slug: singleProject.slug} }">
                            Mostra
                        </RouterLink>
                    </button>
                </div>
            </div>
        </div>
</template>

<style lang="scss" scoped>
    .img-container{
        width: 100%;
        height: 300px;
    }
</style>
