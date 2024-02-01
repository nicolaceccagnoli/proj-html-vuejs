<script>
export default {
    data() {
        return {
            // Definisco un Array di Oggetti per ogni singola Card
            servicesCard: [
                {
                    path: 'svg-1.svg',
                    name: 'Audit & Assurance',
                    paragraph: 'Lorem ipsum dolor sit amet consectetur adipiscing elit'  
                },                    {
                    path: 'svg-2.svg',
                    name: 'Financial Advisory',
                    paragraph: 'Lorem ipsum dolor sit amet consectetur adipiscing elit'  
                },                    {
                    path: 'svg-3.svg',
                    name: 'Analytics and M&A',
                    paragraph: 'Lorem ipsum dolor sit amet consectetur adipiscing elit'  
                },                    {
                    path: 'svg-4.svg',
                    name: 'Middle Marketing',
                    paragraph: 'Lorem ipsum dolor sit amet consectetur adipiscing elit'  
                },                    {
                    path: 'svg-5.svg',
                    name: 'Legal Consulting',
                    paragraph: 'Lorem ipsum dolor sit amet consectetur adipiscing elit'  
                },                    {
                    path: 'svg-6.svg',
                    name: 'Regulatory Risk',
                    paragraph: 'Lorem ipsum dolor sit amet consectetur adipiscing elit'  
                }
            ]
        }
    },
    methods: {
        // Utilizzo una funzione per ottenere un percorso alle SVG presenti in ogni singolo oggetto
        getImagePath: function(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    }
}
</script>


<template>
    <!-- Inizio della Sezione Excellence -->
    <section id="excellence">

        <!-- Inizio di my-container -->
        <div class="my-container">
            
            <!-- Qui inizia il titolo -->
            <div>
                <div class="row g-0">
                    <div class="col-lg-12 col-md-8 col-sm-6">
                        <h3>
                            Excellence in <span> Services </span>
                        </h3>
                    </div>
                </div>
                <div class="row g-0 align-items-center">
                    <div class="col-md-10 col-sm-4">
                        <p>
                            We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of experienced ad renowned professionals. These are some options that you can hire.
                        </p>
                    </div>
                    <div class="col-2 text-end">
                        <a class="main-anchor-style" href="#nogo">
                            SEE ALL
                        </a>
                    </div>
                </div>
            </div>
            <!-- Qui finisce il titolo -->

            <!-- Qui inizia il contenitore delle Card -->
            <div id="services-cards-container">
                <div id="services-card">
                    <div class="row g-0">

                        <!-- Qui iniziano le singole card -->
                        <div 
                        v-for="(singleCard, i) in servicesCard"
                        :key="i"
                        class="single-services-card col-4">
                            <div class="my-3 row g-0">
                                <div class="col-6">
                                    <img class="single-services-img" :src="getImagePath(`/svgs/${singleCard.path}`)" :alt="singleCard.path">
                                </div>
                                <div class="arrow-button col-6 text-end">
                                    <i class="bi bi-arrow-right"></i>
                                </div>
                            </div>
                            <div class="row g-0">
                                <div class="col-auto">
                                    <h4>
                                        {{ singleCard.name }}
                                    </h4>
                                </div>
                            </div>
                            <div class="row g-0">
                                <div class="col-8">
                                    <p>
                                        {{ singleCard.paragraph }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!-- Qui finiscono le singole card -->
                    </div>
                </div>
            </div>
            <!-- Qui finisce il contenitore delle Card -->
            
        </div>
        <!-- Fine di my-container -->

    </section>
    <!-- Fine del contenitore Excellence -->

</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
@import '../assets/scss/partials/mixins.scss';

#excellence {
    background-color: $color-three;
    padding: 100px 0;

   h3 {
    font-size: 50px;
    font-weight: 700;
    
    span {
        @include secondary-span-style;
    }
   } 

   p {
        color: $main-text-color;
        margin-top: 30px;
    }

    .main-anchor-style{
        @include main-anchor-style;
        transition: 0.3s background-color;
    }

    .main-anchor-style:hover {
        background-color:$color-five;
    }

    #services-cards-container {
        margin-top: 50px;
    }

    .single-services-card {
        @include single-services-card;
        transition: transform 0.3s ease;

        .single-services-img {
            width: 50px;
            filter: $filter-svg-color;
        }

        h4 {
            font-weight: bold;
        }

        .arrow-button {
            color: $color-one;
            transition: background-color 0.3s ease;
            font-size: 32px;

            i {
                width: 50px;
                padding: 4px;
            }
        }

    }

    .single-services-card:hover {
            cursor: pointer;
            transform: translateY(-10px);
        }

    .single-services-card:hover .arrow-button i {
        animation: dissolvenzaBackground 0.5s ease forwards;

        @keyframes dissolvenzaBackground {

            0% {
                background-color: transparent;
                border-radius: 50%;
            }
            50% {
                background-color: $color-hover-arrow;
                border-radius: 50%;
            }
            100% {
                background-color: transparent;
                border-radius: 50%;
            }

        }
    }

}

</style>