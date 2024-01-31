<script>
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
                },
        }
</script>


<template>

<div id="technologies">
    <div class="my-container">
        <div id="bottom-container">
            <div class="row align-items-center">
                <div 
                v-for="singleTech in technologies"
                class="tech-container col-2 d-flex justify-content-center">
                    <img :src="singleTech" alt="#">
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
@import '../assets/scss/partials/mixins.scss';

#technologies {
    background: rgb(14,27,42);
    background: linear-gradient(77deg, rgba(14,27,42,1) 0%, rgba(23,58,81,1) 100%);
    padding: 60px 0;
    .tech-container img {
        width: 100px;
        filter: brightness(1000%);
    }
}

</style>