<script>
export default {
    data() {
        return {

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
                    <li> 
                        <RouterLink class="text-white text-decoration-none" :to="{name: 'home' }">
                            Home
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink class="text-white text-decoration-none" :to="{name: 'projects.index' }">
                            Tutti i progetti
                        </RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
</style>
