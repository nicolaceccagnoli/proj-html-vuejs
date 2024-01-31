<script>
import Jumbotron from '../components/Jumbotron.vue';
import Excellence from '../components/Excellence.vue';
import TheCompany from '../components/TheCompany.vue';
import ActionsProject from '../components/ActionsProject.vue';
import Results from '../components/Results.vue';
import Technologies from '../components/Technologies.vue';

    export default {
        data() {
            return {
                technologies: [
                    '/public/images/logo-1.png',
                    '/public/images/logo-2.png',
                    '/public/images/logo-3.png',
                    '/public/images/logo-4.png',
                    '/public/images/logo-5.png',
                    '/public/images/logo-1.png'
                ]
            }
            },
            methods: {
                },
                mounted() {
                    setInterval(() => {
                        this.updateGoal()
                    }, 1000);;
                },
                components:{
                    Jumbotron,
                    Excellence,
                    TheCompany,
                    ActionsProject,
                    Results,
                    Technologies
            }
        }
</script>


<template>

    <Jumbotron />

    <Excellence />

    <TheCompany />

    <ActionsProject />

    <Results />

    <Technologies />

</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
@import '../assets/scss/partials/mixins.scss';

</style>