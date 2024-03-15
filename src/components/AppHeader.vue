<script>
export default {
    data() {
        return {
            links: [
                {
                    routeName: 'home',
                    label: 'Home',
                },
                {
                    routeName: 'projects.index',
                    label: 'Tutti i progetti',
                },
                {
                    routeName: 'contacts',
                    label: 'Contatti',
                }
            ]
        };
    },
    methods: {

    }
}
</script>

<template>
    <header class="bg-dark">
        <div class="container">
            <nav>
                <ul class="d-flex justify-content-between align-items-center py-3">
                    <li v-for="(singleLink, i) in links">
                        <RouterLink class="text-white text-decoration-none" :to="{name: singleLink.routeName }">
                            {{ singleLink.label }}
                        </RouterLink>
                    </li>
                    <!-- <li>
                        <RouterLink class="text-white text-decoration-none" :to="{name: 'contacts' }">
                            Contatti
                        </RouterLink>
                    </li> -->
                </ul>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
</style>
