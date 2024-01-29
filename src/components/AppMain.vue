<script >
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
    <main>
        <div>
            <!-- Compontente (importata grazie a vue-router) mi consente
            di avere,nper URL diversi, contenuti informativi diversi -->
            <router-view></router-view>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';

</style>
