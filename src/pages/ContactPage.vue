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
        <h2 class="text-center my-4">Contattami</h2>
        <form action="" method="POST">
            <div class="mb-3">
                <label for="firstname" class="form-label">Nome</label>
                <input type="text" class="form-control" id="firstname" name="firstname" placeholder="Inserisci il tuo nome...">
            </div>
            <div class="mb-3">
                <label for="lastname" class="form-label">Cognome</label>
                <input type="text" class="form-control" id="lastname" name="lastname" placeholder="Inserisci il tuo cognome...">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <div class="input-group">
                    <input type="email" class="form-control" id="email" name="email" placeholder="Inserisci la tua mail..." aria-describedby="basic-addon1">
                    <span class="input-group-text" id="basic-addon1">@</span>
                </div>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label fs-em fw-light" for="exampleCheck1">
                    Accetto l'informativa sulla privacy e sul trattamento dei dati
                </label>
            </div>
            <div class="row my-4 g-0 justify-content-between">
                <div class="col-auto">
                    <button type="submit" class="btn btn-secondary">
                        <RouterLink class="text-white text-decoration-none" :to="{name: 'home' }">
                            Torna alla Home
                        </RouterLink>
                    </button>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary">Invia</button>
                </div>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
    .fs-em{
        font-size: 0.8rem;
    }
</style>
