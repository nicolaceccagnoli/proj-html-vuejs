<script>
import Jumbotron from '../components/Jumbotron.vue';
import Excellence from '../components/Excellence.vue';
import TheCompany from '../components/TheCompany.vue';
import ActionsProject from '../components/ActionsProject.vue';

    export default {
        data() {
            return {

                // Creo un intervallo 
                interval: 50,

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
                
                technologies: [
                    'logo-1.png',
                    'logo-2.png',
                    'logo-3.png',
                    'logo-4.png',
                    'logo-5.png',
                    'logo-1.png'
                ]
            }
        },
        methods: {
            // Creo una funzione per aggiornare il contatore
            updateGoal() {
                 // Faccio un ciclo per controllare ogni singolo Goal in Goals
                    for (let goal in this.goals) {
                        const currentGoal = this.goals[goal];

                        // Calcolo l'incremento per un effetto progressivo
                        const increment = currentGoal.goal / (3000 / this.interval);

                        // Imposto un intervallo per aggiornare gradualmente currentValue
                        const goalInterval = setInterval(() => {
                        this.goals[goal].currentValue += increment;

                        // Arrotondo il valore verso il basso per rimuovere la parte decimale
                        this.goals[goal].currentValue = Math.floor(this.goals[goal].currentValue);

                        if (this.goals[goal].currentValue >= currentGoal.goal) {
                            this.goals[goal].currentValue = currentGoal.goal;
                            clearInterval(goalInterval);
                        }
                        }, this.interval);
                    }
                },
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
                ActionsProject
            }
        }
</script>


<template>

    <Jumbotron />

    <Excellence />

    <TheCompany />

    <ActionsProject />

    <div id="results">
        <div class="my-container">
            <div id="up-container">
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
                <div class="row justify-content-between">
                    <div 
                    v-for="(singleGoal, i) in goals"
                    :key="i"
                    class="goal text-success col text-center">
                        <h3 class="goal-number">
                            {{singleGoal.currentValue}}
                        </h3>
                        <p>
                            {{ singleGoal.name }}
                        </p>
                    </div>
                </div>
            </div>
            <div id="bottom-container">

            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
@import '../assets/scss/partials/mixins.scss';

#results {
    background-image:
        linear-gradient(77deg,
         rgba(14,27,42,0.3), 
         rgba(23,58,81,0.2)), 
         url('/public/images/bg-7.jpg');
    background-position: center;
    padding: 100px 0;

    h3 {
        color: white;
        font-size: 50px;
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
</style>