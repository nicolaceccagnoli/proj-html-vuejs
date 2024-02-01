<script>
    export default {
        data() {
            return {
                companyCards: [
                    {
                        icon: 'bi bi-hourglass-bottom',
                        name: 'Tradition',
                        paragraph: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'
                    },                    {
                        icon: 'bi bi-lock-fill',
                        name: 'Security',
                        paragraph: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'
                    },                    {
                        icon: 'bi bi-tree-fill',
                        name: 'Certificate',
                        paragraph: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'
                    },                    {
                        icon: 'bi bi-person-fill',
                        name: 'Expertise',
                        paragraph: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'
                    }
                ]
            }
        },
    }
</script>


<template>
    <div id="company">
        <div class="my-container">
            <div class="row g-0">
                <div id="small-company" class="col-12">
                    <div class="row g-0">
                        <div class="col-6">
                            <div class="row g-0">
                                <div class="col-12">
                                    <h3>
                                        The <span> Company </span> 
                                    </h3>
                                </div>
                                <div class="col-12">
                                    <p id="company-paragraph">
                                        For 12 years we have been providing audit and warranty, financial advice, risk advice, taxes and related services to select clients.
                                    </p>
                                </div>
                                <div class="row g-0">
                                    <div
                                    v-for="(card, i) in companyCards"
                                    :key="i" 
                                    class="company-cards col-6">
                                        <div class="row g-0 align-items-center mb-3">
                                            <div class="col-auto">
                                                <a 
                                                class="d-flex align-items-center text-decoration-none"
                                                href="#">
                                                    <i :class="card.icon"></i>
                                                    <h5 class="ps-2">
                                                        {{ card.name }}
                                                    </h5>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="row g-0">
                                            <div class="col-12 pe-5 ">
                                                <p class="card-paragraph">
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
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
@import '../assets/scss/partials/mixins.scss';

#company{
    @include company-style;   

   #small-company {

    margin: 100px 0;

    h3 {
        color: white;
        font-size: $title-3-size;
        margin-bottom: 30px;

        span {
            @include tertiary-span-style;
        }

    }

    h5 {
        font-weight: bold;
        font-size: $title-5-size;
        color: white;
    }

    i {
        color: $color-one;
        font-size: 32px;
    }

    #company-paragraph{
        color: #AFB6BA;
        margin: 0 0 30px 0;
        max-width: 500px;
    }

    .company-cards {
        width: $company-cards-wd;
        margin: 10px 10px;
        color: #AFB6BA;
    }
   } 
}
</style>