<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    data() {
        return {
            firstname:'',
            lastname: '',
            email: '',
            message: '',
            accepted : false
        };
    },
    components:{
    },
    methods: {
        sendDataToApi(){
            if(
                this.firstname != null
                &&
                this.firstname != ''
                &&
                this.firstname.length <= 74
                &&
                this.lastname != null
                &&
                this.lastname != ''
                &&
                this.lastname.length <= 74
                &&
                this.email != null
                &&
                this.email != ''
                &&
                this.email.length <= 255
                &&
                this.message != null
                &&
                this.message != ''
                &&
                this.message.length <= 1024
                &&
                this.accepted
            )
            {
                axios.post('http://127.0.0.1:8000/api/contacts')
                    .then()
            }
            else{
                alert('Errore! Inserisci i dati correttamente')
            }
        }
    },
}
</script>

<template>
    <div class="container">
        <h2 class="text-center my-4">Contattami</h2>
        <form action="" method="POST" @submit.prevent="sendDataToApi()">
            <div class="mb-3">
                <label for="firstname" class="form-label">Nome</label>
                <input v-model="firstname" type="text" class="form-control" id="firstname" name="firstname" placeholder="Inserisci il tuo nome..." required maxlength="74">
            </div>

            <div class="mb-3">
                <label for="lastname" class="form-label">Cognome</label>
                <input v-model="lastname" type="text" class="form-control" id="lastname" name="lastname" placeholder="Inserisci il tuo cognome..." required maxlength="74">
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <div class="input-group">
                    <input v-model="email" type="email" class="form-control" id="email" name="email" placeholder="Inserisci la tua mail..." aria-describedby="basic-addon1" required maxlength="255">
                    <span class="input-group-text" id="basic-addon1">@</span>
                </div>
            </div>

            <div class="mb-3">
                <label for="message" class="form-label">Messaggio:</label>
                <textarea v-model="message" class="form-control" id="message" name="message" rows="3" required maxlength="1024"></textarea>
            </div>

            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="accepted" required>
                <label class="form-check-label fs-em fw-light" for="exampleCheck1">
                    Accetto l'informativa sulla <a href="#nogo">privacy policy</a>  e sul  <a href="#nogo">trattamento dei dati</a>
                </label>
            </div>

            <div class="row my-4 g-0 justify-content-between">
                <div class="col-auto">
                    <button class="btn btn-secondary">
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
