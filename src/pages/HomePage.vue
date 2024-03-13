<script>
import axios from 'axios';
export default {
    data() {
        return {
            projects: [], 
        };
    },
    methods: {
    },
    mounted(){
        axios.get('http://127.0.0.1:8000/api/projects')
            .then((response)=>{
                console.log(response.data.results.data);
                this.projects = response.data.results.data;

            });
        console.log('Progetto:'+this.projects);
    }
}
</script>

<template>
    <main>
        <h1>Home page</h1>
    </main>
</template>

<style lang="scss" scoped>
</style>
