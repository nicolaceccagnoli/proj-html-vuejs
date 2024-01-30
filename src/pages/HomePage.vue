<script>
import Jumbotron from '../components/Jumbotron.vue';
import Excellence from '../components/Excellence.vue';
import TheCompany from '../components/TheCompany.vue';

    export default {
        data() {
            return {

                projectsCards: [
                    {
                        path: '/public/images/airpods-max.jpeg',
                        title: 'Portfolio item with intro with sidebar',
                        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulu...',
                    },                    {
                        path: '/public/images/airpods-max.jpeg',
                        title: 'Portfolio item with intro with sidebar',
                        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulu...',
                    },                    {
                        path: '/public/images/airpods-max.jpeg',
                        title: 'Portfolio item with intro with sidebar',
                        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulu...',
                    },                    {
                        path: '/public/images/airpods-max.jpeg',
                        title: 'Portfolio item with intro with sidebar',
                        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulu...',
                    },                    {
                        path: '/public/images/airpods-max.jpeg',
                        title: 'Portfolio item with intro with sidebar',
                        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulu...',
                    },                    {
                        path: '/public/images/airpods-max.jpeg',
                        title: 'Portfolio item with intro with sidebar',
                        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulu...',
                    }
                ]

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
            <div class="row g-0">
                <div class="col-12 text-center">
                    <h3>
                        Actions & <span> Projects </span>
                    </h3>
                </div>
                <div class="my-4 col-12 d-flex justify-content-around"> 
                    <a href="#">
                        BOTTONE
                    </a>
                    <a href="#">
                        BOTTONE
                    </a>
                    <a href="#">
                        BOTTONE
                    </a>
                    <a href="#">
                        BOTTONE
                    </a>
                    <a href="#">
                        BOTTONE
                    </a>
                    <a href="#">
                        BOTTONE
                    </a>
                    <a href="#">
                        BOTTONE
                    </a>
                </div>
            </div>
            <div class="row g-0">
                <div
                v-for="(singleProject, i) in projectsCards"
                :key="i"
                class="single-project col-4">
                    <img :src="singleProject.path" alt="#">
                    <div class="info-container">
                        <h4>
                            {{ singleProject.title }}
                        </h4>
                        <p>
                            {{ singleProject.info }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
@import '../assets/scss/partials/mixins.scss';
#actions-project-container {
    background-color: $color-three;

    h3 {
    font-size: 50px;
    font-weight: bold;

    span {
            @include secondary-span-style;
        }
    }

    .single-project {
        width: calc((100% / 3) - 20px);
        height: 300px;
        margin: 15px 10px;
        position: relative;

        img {
            object-fit: cover;
            height: 100%;
            width: 100%;
        }

        .info-container {
            text-align: center;
            position: absolute;
            top:0;
            left:0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.4);

            h4 {
                color: white;
                font-weight: bold;
            }
       }
    }

}

</style>