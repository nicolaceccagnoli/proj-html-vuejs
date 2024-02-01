<script>
    export default {
        data() {
            return {

                // Creo un intervallo per la funzione del contatore
                interval: 50,

                // Definisco una variabile per l'immagine tra i 2 contenitori
                bulletsImg: 'svg-0.svg',

                // Definisco un Array di oggetti per le voci dei risultati
                goals: [
                    {
                        currentValue: 0,
                        goal: 128,
                        name: 'Certifications'
                    },
                    {
                        currentValue: 0,
                        goal: 230,
                        name: 'Employees',
                    },
                    {
                        currentValue: 0,
                        goal: 517,
                        name: 'Customers'
                    },
                    {
                        currentValue: 0,
                        goal: 94,
                        name: 'Countries Served'
                    }
                ],

                // Definisco un Array per le immagini delle Tecnologie utilizzate
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
            // Creo una funzione per aggiornare il contatore
            updateGoal() {
                 // Faccio un ciclo per controllare ogni singolo Goal in Goals
                    for (let goal in this.goals) {

                        // Definisco una variabile che corrisponda a ogni singolo Goal in Goals
                        const currentGoal = this.goals[goal];

                        // Calcolo l'incremento per un effetto progressivo
                        const increment = currentGoal.goal / (3000 / this.interval);

                        // Imposto un intervallo per aggiornare gradualmente currentValue
                        const goalInterval = setInterval(() => {

                            // Faccio corrispondere il currentValue di ogni singolo Goal all'incremento
                            currentGoal.currentValue += increment;

                            // Arrotondo il valore verso il basso per rimuovere la parte decimale
                            currentGoal.currentValue = Math.floor(currentGoal.currentValue);

                            // Definisco una condizione per cui se ogni singolo Current Value è uguale al rispettivo risultato 
                            if (currentGoal.currentValue >= currentGoal.goal) {
                                
                                // Allora ogni singolo goal raggiunge quel singolo risultato 
                                currentGoal.currentValue = currentGoal.goal;

                                // E la Funzione Timeout si interrompe
                                clearInterval(goalInterval);
                            }
                        }, this.interval);
                    }
                },
                // Definisco una funzione per definire un percorso alle immagini che non ce l'hanno
                getImagePath: function(imgPath) {
                    return new URL(imgPath, import.meta.url).href;
                }
            },
            mounted() {
                // Quando l'istanza viene montata in pagina parte un intervallo che fa partire il contatore
                setInterval(() => {
                    this.updateGoal()
                }, 3000);;
            },
        }
</script>


<template>
    <!-- Inizio della sezione Results -->
    <section id="results">

        <!-- Inizio di my-container -->
        <div class="my-container">

            <!-- Inizio del titolo -->
            <div class="row flex-column justify-content-center text-center">
                <div class="col-auto">
                    <h3>
                        Results in <span> Numbers </span>
                    </h3>
                </div>
                <div class="col-auto">
                    <p>
                        Our goal is to exceed expectations by delivering the berst job possible.
                    </p>
                </div>
            </div>
            <!-- Fine del titolo -->

            <div class="row justify-content-between">

                <!-- Inizio di ogni singolo Risultato -->
                <div 
                v-for="(singleGoal, i) in goals"
                :key="i"
                class="goal text-success col-lg col-md-6 text-center">
                    <h3 class="goal-number">
                        {{singleGoal.currentValue}}
                    </h3>
                    <p>
                        {{ singleGoal.name }}
                    </p>
                </div>
                <!-- Fine di ogni singolo Risultato -->

            </div>
        </div>
        <!-- Fine di my-container -->

    </section>
    <!-- Fine della sezione Results -->

    <!-- Inizio della sezione Technologies -->
    <section id="technologies">

        <!-- Inizio di my-container -->
        <div class="my-container">
            <div>
                <img 
                id="bullets-img"
                :src="getImagePath(`/svgs/${bulletsImg}`)" alt="#">
            </div>
            <div class="row align-items-center">

            <!-- Inizio di ogni singola Tecnologia -->
            <div 
                v-for="singleTech in technologies"
                class="tech-container col-lg-2 col-md-6 d-flex justify-content-center">
                    <a href="#nogo">
                        <img :src="singleTech" alt="#">
                    </a>
                </div>
            </div>
            <!-- Fine di ogni singola Tecnologia -->

        </div>
        <!-- Fine di my-container -->

    </section>
    <!-- Fine della sezione Technologies -->

</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
@import '../assets/scss/partials/mixins.scss';

#results {
    
    @include results-bg;

    h3 {
        color: white;
        font-size: $title-3-size;
        font-weight: bold;

        span {
            @include tertiary-span-style;
        }

    }

    p {
        color: #BDC0CD;
        margin: 30px 0;
    }
 
    .goal {
        .goal-number {
            color: $color-five;
        }
    }
}

#technologies {
    @include technologies;
    position: relative;
    .tech-container img {
        @include tech-container-img;
    }

    #bullets-img {
        @include bullets-img;
    }
}

</style>