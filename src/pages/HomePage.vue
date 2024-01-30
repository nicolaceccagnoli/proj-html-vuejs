<script>
import Jumbotron from '../components/Jumbotron.vue';
import Excellence from '../components/Excellence.vue';
import TheCompany from '../components/TheCompany.vue';

    export default {
        data() {
            return {
            }
        },
        components:{
            Jumbotron,
            Excellence,
            TheCompany
        },
    }
</script>


<template>
    <Jumbotron />

    <Excellence />

    <TheCompany />

    <div id="actions-project-container">
        <div class="my-container">
            <div class="row">
                <div class="col-12">
                    <h3>
                        Actions & <span> Projects </span>
                    </h3>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
@import '../assets/scss/partials/mixins.scss';

h3 {
    font-size: 50px;

    span {
            @include main-span-style;
        }

}

</style>