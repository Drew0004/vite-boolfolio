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
                <div class="img-container">
                    <img :src="basePath+singleProject.cover_img" class="card-img-top w-100 h-100 object-fit-cover" alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{ singleProject.title }}</h5>
                    
                    <p class="card-text">{{ singleProject.description }}</p>
                    <div class="py-1" v-for="singleTechnology in singleProject.technologies">
                        <span class="badge text-bg-primary">{{ singleTechnology.title }}</span>
                    </div>
                    <div class="py-1">
                        <span class="badge text-bg-success">{{ singleProject.type.title }}</span>
                    </div>
                    
                    <a href="#" class="btn btn-primary">Go somewhere</a>
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
