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

                // Verifico se l'utente sta scrollando verso l'alto o verso il basso
                this.showUpperButton = currentScrollPosition < this.lastScrollPosition || currentScrollPosition < 100;

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
            modules: [Parallax, Pagination, Navigation],
            };
        },
    }
</script>


<template>
    <div id="jumbotron-container">
        <swiper
            :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            }"
            :speed="600"
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
            <swiper-slide>
                <div class="row jumbotron-text-one">
                    <div class="title col-12" data-swiper-parallax="-300">
                        <h1>
                            We Share <br> <span> Good Ideas </span>
                        </h1>
                    </div>
                    <div class="text col-12" data-swiper-parallax="-100">
                        <p>
                            Escape the comfort zone and achieve better results with the help of experts who understand the subject.
                        </p>
                    </div>
                    <div class="col-12">
                        <a class="main-anchor-style" href="#">
                            GET IN TOUCH
                        </a>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="row jumbotron-text-two">
                    <div class="title col-12" data-swiper-parallax="-300">
                        <h1>
                            Ready <span> Team </span>
                        </h1>
                    </div>
                    <div class="text col-12 text-center" data-swiper-parallax="-100">
                        <p>
                            No matter what your company needs, we will be ready to assist you in the best possible way.
                        </p>
                    </div>
                    <div class="col-12">
                        <a class="main-anchor-style" href="#">
                            GET IN TOUCH
                        </a>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="row jumbotron-text-three">
                    <div class="title col-12" data-swiper-parallax="-300">
                        <h1>
                            Talk to a <br> <span> Consultant </span>
                        </h1>
                    </div>
                    <div class="text col-12" data-swiper-parallax="-100">
                        <p>
                            Do not miss the opportunity to achieve better results and solidity in the market.
                        </p>
                    </div>
                    <div class="col-12">
                        <a class="main-anchor-style" href="#">
                            GET IN TOUCH
                        </a>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <a 
        v-if="showUpperButton"
        href="#jumbotron-container"
        id="upper-button">
            <i class="bi bi-arrow-up-circle"></i>
        </a>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
@import '../assets/scss/partials/mixins.scss';

#jumbotron-container {
    height: calc(100vh - 80px);

    #upper-button {
        position: fixed;
        z-index: 1;
        bottom: 50px;
        right: 50px;
        background-color: transparent;
        color: $color-five;
        border: none;

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
  width: 100%;
  height: 100%;
  background: #fff;
  position: relative;
}

.swiper-slide {
  font-size: 18px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 40px 60px;
}

.parallax-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 200%;
  height: 100%;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
}

.swiper-slide .title {
  font-size: 41px;
  font-weight: 300;
}

.swiper-slide .subtitle {
  font-size: 21px;
}

.swiper-slide .text {
  font-size: 14px;
  max-width: 400px;
  line-height: 1.3;
}

.jumbotron-text-one, .jumbotron-text-two, .jumbotron-text-three {
   
    h1 {
    color: #22333E;
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
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.jumbotron-text-two {
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translate(-50%, -50%);

    .main-anchor-style {
        position: relative;
        right: -10%;
        transform: translateX(10%);
    }
}

.jumbotron-text-three {
    position: absolute;
    top: 50%;
    left: 80%;
    transform: translate(-50%, -50%);
}


</style>