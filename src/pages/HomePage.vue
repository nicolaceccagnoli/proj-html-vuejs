<script>
import Jumbotron from '../components/Jumbotron.vue';
import Excellence from '../components/Excellence.vue';
    export default {
        data() {
            return {
                companyCards: [
                    {
                        path: `<i class="fa-solid fa-hourglass-start"></i>`,
                        name: 'Tradition',
                        paragraph: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'
                    },                    {
                        icon: `<i class="fa-solid fa-lock"></i>`,
                        name: 'Security',
                        paragraph: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'
                    },                    {
                        icon: `<i class="fa-solid fa-apple-whole"></i>`,
                        name: 'Certificate',
                        paragraph: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'
                    },                    {
                        icon: `<i class="fa-solid fa-user-tie"></i>`,
                        name: 'Expertise',
                        paragraph: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'
                    }
                ]
            }
        },
        components:{
            Jumbotron,
            Excellence
        }
    }
</script>


<template>
    <Jumbotron />

    <Excellence />

    <div id="company">
        <div class="my-container">
            <div class="row">
                <div id="small-company" class="col-6">
                    <div class="row">
                        <div class="col-12">
                            <h3>
                                The <span> Company </span> 
                            </h3>
                        </div>
                        <div class="col-12">
                            <p>
                                For 12 years we have been providing audit and warranty, financial advice, risk advice, taxes and related services to select clients.
                            </p>
                        </div>
                        <div class="row">
                            <div
                            v-for="(card, i) in companyCards"
                            :key="i" 
                            class="col-6">

                                <div class="row">
                                    <div class="col-auto">
                                        <i class="fa-solid fa-hourglass-start"></i> 
                                    </div>
                                    <div class="col-auto">
                                        <h5>
                                            {{ card.name }}
                                        </h5>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <p>
                                            {{ card.paragraph }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
@import '../assets/scss/partials/mixins.scss';

#company{
    background:url('/public/images/about-4.jpg') no-repeat;
    background-position: right center;
    width: 100%;
    height:500px;
    padding: 15px;

   #small-company {
    h3 {
        color: white;
        font-size: 50px;

        span {
            @include tertiary-span-style;
        }

    }

    h5 {
        font-weight: bold;
        font-size: 24px;
        color: white;
    }

    i {
        color: white;
    }

    p {
        color: $main-text-color;
    }

   } 
}
</style>