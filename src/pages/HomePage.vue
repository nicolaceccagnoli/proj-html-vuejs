<script>
import Jumbotron from '../components/Jumbotron.vue';
import Excellence from '../components/Excellence.vue';
import TheCompany from '../components/TheCompany.vue';
import ActionsProject from '../components/ActionsProject.vue';
import Results from '../components/Results.vue';
import FormSection from '../components/FormSection.vue';
import OffCanvas from '../components/OffCanvas.vue';


    export default {
        data() {
            return {
            }
            },
            methods: {
                },
            components:{
                Jumbotron,
                Excellence,
                TheCompany,
                ActionsProject,
                Results,
                FormSection,
                OffCanvas
            }
        }
</script>


<template>

    <OffCanvas />

    <Jumbotron />

    <Excellence />

    <TheCompany />

    <ActionsProject />

    <Results />

    <FormSection />

</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
@import '../assets/scss/partials/mixins.scss';

</style>