<script>
 import { Swiper, SwiperSlide } from 'swiper/vue';
 // Import Swiper styles
 import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

    export default {
        data() {
            return {
                // Creo una flag per mostrare il Bottone che riporta l'utente in alto nella pagina
                showUpperButton: false,
                lastScrollPosition: 0,
            };
        },
        methods: {
            handleScroll() {
                // Creo una costante che corrisponderà alla posizione Y dell'utente in pagina
                const currentScrollPosition = window.scrollY;

                // Verifico se l'utente sta scrollando verso l'alto o verso il basso e imposto la Flag del Bottone a True
                this.showUpperButton = currentScrollPosition > 0 && (currentScrollPosition < this.lastScrollPosition || currentScrollPosition < 100);

                // Aggiorno la posizione di scorrimento precedente
                this.lastScrollPosition = currentScrollPosition; 
            },
        },
        mounted() {
            // Aggiungo un eventListener all'azione di scroll della pagina
            window.addEventListener('scroll', this.handleScroll);
        },
            beforeDestroy() {
            // Rimuovo l'eventListener dell'azione di scroll quando il componente viene distrutto
            window.removeEventListener('scroll', this.handleScroll);
        },
        components: {
            Swiper,
            SwiperSlide
        },
        setup() {
        return {
            modules: [
                Parallax,
                Pagination,
                Navigation
            ],
        };
    },
}
</script>


<template>
    <!-- Inizio del contentitore Jumbotron -->
    <div id="jumbotron-container">

        <!-- Inizio dello Swiper -->
        <swiper
            :style="{
            '--swiper-navigation-color': '#999',
            '--swiper-pagination-color': '#999',
            }"
            :speed="800"
            :parallax="true"
            :pagination="{
            clickable: true,
            }"
            :navigation="true"
            :modules="modules"
            class="mySwiper">
            <div
            slot="container-start"
            class="parallax-bg"
            :style="{
                'background-image':
                'url(public/images/bg-parallax.png)',
            }"
            data-swiper-parallax="-50%">
            </div>
            <!-- Inizio Prima Slide -->
            <swiper-slide>
                <div class="row jumbotron-text-one">
                    <div class="title col-lg-12 col-md-8 col-sm-6" data-swiper-parallax="-300">
                        <h1>
                            We Share <br> <span> Good Ideas </span>
                        </h1>
                    </div>
                    <div class="text col-lg-12 col-md-8 col-sm-6" data-swiper-parallax="-100">
                        <p>
                            Escape the comfort zone and achieve better results with the help of experts who understand the subject.
                        </p>
                    </div>
                    <div class="col-lg-12 col-md-8 col-sm-6">
                        <a class="main-anchor-style" href="#">
                            GET IN TOUCH
                        </a>
                    </div>
                </div>
            </swiper-slide>
            <!-- Fine Prima Slide -->

            <!-- Inizio Seconda Slide -->
            <swiper-slide>
                <div class="row jumbotron-text-two">
                    <div class="title col-lg-12 col-md-8 col-sm-6" data-swiper-parallax="-300">
                        <h1>
                            Ready <span> Team </span>
                        </h1>
                    </div>
                    <div class="text col-lg-12 col-md-8 col-sm-6 text-center" data-swiper-parallax="-100">
                        <p>
                            No matter what your company needs, we will be ready to assist you in the best possible way.
                        </p>
                    </div>
                    <div class="col-lg-12 col-md-8 col-sm-6">
                        <a class="main-anchor-style" href="#">
                            GET IN TOUCH
                        </a>
                    </div>
                </div>
            </swiper-slide>
            <!-- Fine Seconda Slide -->

            <!-- Inizio Terza Slide -->
            <swiper-slide>
                <div class="row jumbotron-text-three">
                    <div class="title col-lg-12 col-md-8 col-sm-6" data-swiper-parallax="-300">
                        <h1>
                            Talk to a <br> <span> Consultant </span>
                        </h1>
                    </div>
                    <div class="text col-lg-12 col-md-8 col-sm-6" data-swiper-parallax="-100">
                        <p>
                            Do not miss the opportunity to achieve better results and solidity in the market.
                        </p>
                    </div>
                    <div class="col-lg-12 col-md-8 col-sm-6">
                        <a class="main-anchor-style" href="#">
                            GET IN TOUCH
                        </a>
                    </div>
                </div>
            </swiper-slide>
            <!-- Fine Terza Slide -->

        </swiper>
        <!-- Fine dello Swiper -->

        <!-- Bottone per riportare l'utente in alto in pagina -->
        <a 
        v-if="showUpperButton"
        href="#jumbotron-container"
        id="upper-button">
            <i class="bi bi-arrow-up-circle"></i>
        </a>
    </div>
    <!-- Fine del contentitore Jumbotron -->

</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
@import '../assets/scss/partials/mixins.scss';

#jumbotron-container {
    height: $jumbo-hg;

    #upper-button {
        @include upper-button;

        i {
            color: $color-one;
            font-size: 50px;
        }
    }

    #upper-button:hover {

        i {
            transition: 0.3s color;
            color: $color-five;
        }
    }
}
.swiper {
    @include swiper;
}

.swiper-slide {
    @include swiper-slide;
}
.parallax-bg {
    @include parallax-bg;
}

.swiper-slide .title {
  font-size: 41px;
  font-weight: 300;
}

.swiper-slide .subtitle {
  font-size: 20px;
}

.swiper-slide .text {
  font-size: 14px;
  max-width: 400px;
  line-height: 1.3;
}
.jumbotron-text-one, .jumbotron-text-two, .jumbotron-text-three {
   
    h1 {
    color: $title-1;
    font-size: 70px;
    font-weight: 700;

    span {
            @include main-span-style;
        }
    }

    p {
    margin: 50px 0;
    font-size: 20px;
    color: $main-text-color;
    }

    .main-anchor-style {
    @include main-anchor-style;
    transition: 0.3s background-color;
    }

    .main-anchor-style:hover {
        background-color: $color-five;
    }

}

.jumbotron-text-one {
    @include jumbo-txt-one;
}

.jumbotron-text-two {
    @include jumbo-txt-two;

    .main-anchor-style {
        position: relative;
        right: -10%;
        transform: translateX(10%);
    }
}

.jumbotron-text-three {
    @include jumbo-txt-three;
}

</style>