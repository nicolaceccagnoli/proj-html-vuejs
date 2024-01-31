<script>
import Jumbotron from '../components/Jumbotron.vue';
import Excellence from '../components/Excellence.vue';
import TheCompany from '../components/TheCompany.vue';
import ActionsProject from '../components/ActionsProject.vue';

    export default {
        data() {
            return {
            }
        },   
        components:{
            Jumbotron,
            Excellence,
            TheCompany,
            ActionsProject
        }
    }
</script>


<template>

    <Jumbotron />

    <Excellence />

    <TheCompany />

    <ActionsProject />

</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
@import '../assets/scss/partials/mixins.scss';


</style>