<script>
import axios from 'axios';
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
    <main>
        <h1 class="text-center py-5">Home page</h1>
        <div class="container">
            <div class="row justify-content-center">
                <button class="btn btn-primary col-auto my-5">
                    <RouterLink class="text-white text-decoration-none" :to="{name: 'projects.index' }">
                        Vai all'indice dei progetti
                    </RouterLink>
                </button>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
</style>
