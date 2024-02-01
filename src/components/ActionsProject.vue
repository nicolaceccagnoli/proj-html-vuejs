<script>
    export default {
        data() {
            return {

                // Creo un array vuoto temporaneo
                tempArray: [],

                // Creo un array per i tags selezionati
                selectedTags: [],

                // Creo l'array di oggetti per ogni singola Card
                projectsCards: [
                    {
                        path: '/public/images/airpods-max.jpeg',
                        title: 'Portfolio item with intro with sidebar',
                        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulu...',
                        showInfo: false,
                        tags_ids: [
                                    0,
                                    1,
                                    2,
                                    3
                                ]
                    },       
                    {
                        path: '/public/images/cactus.jpeg',
                        title: 'Portfolio item with intro with sidebar',
                        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulu...',
                        showInfo: false,
                        tags_ids: [
                                    0,
                                    4,
                                    5,
                                    6,
                                ]
    
                    },
                    {
                        path: '/public/images/cherries.jpeg',
                        title: 'Portfolio item with intro with sidebar',
                        showInfo: false,
                        tags_ids: [
                                    0,
                                    5,
                                    2,
                                    3,
                                ]    
                    },
                    {
                        path: '/public/images/headphones.avif',
                        title: 'Portfolio item with intro with sidebar',
                        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulu...',
                        showInfo: false,
                        tags_ids: [
                                    0,
                                    4,
                                    6,
                                    2,
                                ]    
                    },      
                    {
                        path: '/public/images/avocado.jpeg',
                        title: 'Portfolio item with intro with sidebar',
                        showInfo: false,
                        tags_ids: [
                                    0,
                                    4,
                                    5,
                                    1,
                                ]    
                    }, 
                    {
                        path: '/public/images/cocktail.webp',
                        title: 'Portfolio item with intro with sidebar',
                        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulu...',
                        showInfo: false,
                        tags_ids: [
                                    0,
                                    6,
                                    2,
                                    3,
                                ]
                    },
                ],
                // Creo un Array per i Bottoni
                buttons: [
                    {
                        id: 0,
                        name: 'ALL'
                    },
                    {
                        id: 4,
                        name: 'ENVIRONMENT'
                    },
                    {
                        id: 5,
                        name: 'EVENTS'
                    },
                    {
                        id: 1,
                        name: 'INSTITUTIONAL'
                    },
                    {
                        id: 6,
                        name: 'SOCIAL'
                    },
                    {
                        id: 2,
                        name: 'TECHNOLOGY'
                    },
                    {
                        id: 3,
                        name: 'INNOVATION'
                    }
                ]

            }
        },
        methods: {
            // Creo delle funzioni che cambiano il valore delle flag di ogni card in projectCards
            showInfoFunction(index) {
                this.projectsCards[index].showInfo = true
            },
            hideInfoFunction(index) {
                this.projectsCards[index].showInfo = false
            },
            selectedCards(selectedValue) {

                this.selectedTags = [];

                // Applico un controllo per cui se un elemento è già presente nell'array non lo pusho, se è già presente lo toglie
                if (!this.selectedTags.includes(selectedValue)) {
                    this.selectedTags.push(selectedValue)
                } else {
                    // Dichiaro una variabile che farà corrispondere l'elemento già presente all'interno di selectedTags al suo stesso indice
                    const elem = this.selectedTags.indexOf(selectedValue);
                    this.selectedTags.splice(elem, 1);
                }

                console.log('SELECTED TAGS: ', this.selectedTags);

                // Ogni volta che cerco un nuovo tag dichiaro l'array temporaneo delle card vuoto
                this.tempArray = [];

                console.log('ARRAY TEMPORANEO: ', this.tempArray);
                
                // Dichiaro una funzione che mi servirà per effettuare un controllo tra 2 array
                const isSubset = (array1, array2) =>
                    array2.every((element) => array1.includes(element));
                    
                // Creo un ciclo per controllare su ogni singola Card dell'Array
                for (let card in this.projectsCards) {

                    // Se il tag di ogni singola Card corrisponde al bottone selezionato
                    if (isSubset(this.projectsCards[card].tags_ids, this.selectedTags)) {
                        // Allora quella Card viene aggiunta a tempArray
                        this.tempArray.push(this.projectsCards[card]);
                    }
                }
            }
        },
        mounted() {
            // Appena l'istanza viene montata assegno a tempArray gli elementi di projectCards e lo uso poi per stampare gli elementi in pagina
            this.tempArray = this.projectsCards;
        }
    }
</script>


<template>
    <!-- Inizio della sezione Actions Project -->
    <section id="actions-project-container">

        <!-- Inizio di my-container -->
        <div class="my-container">

            <!-- Qui inizia il titolo -->
            <div class="row g-0">
                <div class="col-12 text-center">
                    <h3>
                        Actions & <span> Projects </span>
                    </h3>
                </div>
                <div
                class="my-4 offset-2 col-8 d-flex justify-content-around"> 
                    <button
                    :class="{
                        'active' : selectedTags.includes(button.id)
                    }"
                    @click="selectedCards(button.id)"
                    v-for="(button, i) in buttons"
                    :key="i"
                    href="#nogo">
                        {{ button.name }}
                    </button>
                </div>
            </div>
            <!-- Qui finisce il titolo -->

            <!-- Inizio del carosello -->
            <div class="row g-0">

                <!-- Inizio di ogni singola card del carosello -->
                <div
                @mouseover="showInfoFunction(i)"
                @mouseout="hideInfoFunction(i)"
                v-for="(singleProject, i) in tempArray"
                :key="i"
                class="single-project col-lg-4 col-md-6 col-sm-12">
                    <img :src="singleProject.path" alt="#">
                    <div class="info-container">
                        <div class="row g-0 h-100">
                            <div class="col d-flex flex-column justify-content-between">
                                <div
                                class="row g-0 p-3 show-info-one">
                                    <div
                                    v-show="singleProject.showInfo"
                                    class="col-4 offset-2">
                                    <i class="bi bi-person pe-1"></i>
                                        <span>Coding</span>
                                    </div>
                                    <div
                                    v-show="singleProject.showInfo"
                                    class="col-4">
                                    <i class="bi bi-clock pe-1"></i>
                                        <span>3 Years</span>
                                    </div>
                                </div>
                                <div class="row g-0">
                                    <div class="col">
                                        <h4>
                                            {{ singleProject.title }}
                                        </h4>
                                    </div>
                                </div>
                                <div class="row g-0 show-info-two">
                                    <div
                                    v-show="singleProject.showInfo"
                                    class="col">
                                        <p>
                                            {{ singleProject.info }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Inizio di ogni singola card del carosello -->
                
            </div>
            <!-- Inizio del carosello -->

        </div>
        <!-- Fine di my-container -->

    </section>
    <!-- Fine della sezione Actions Project -->

</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
@import '../assets/scss/partials/mixins.scss';

#actions-project-container {
    background-color: $color-three;
    
    .my-container {
        padding: 100px 0;
    }

    h3 {
    font-size: $title-3-size;
    font-weight: bold;

    span {
            @include secondary-span-style;
        }
    }

    button {
        @include button
    }

    button.active {
        background-color: #C9DBDD;
        padding: 4px 12px;
        border-radius: 5px;
    }

    .single-project {
        @include single-project; 

        img {
            object-fit: cover;
            height: 100%;
            width: 100%;
        }

        .info-container {

            @include info-container;

            h4 {
                color: white;
                font-weight: bold;
            }

            .bi-person, .bi-clock {
                font-size: 20px;
            }
       }

    }

    .single-project:hover img {
        transition: transform 0.3s ease-in-out;
        transform: scale(1.1);
    }
    .single-project:hover .info-container {
        transition: 0.5s background-color;
        background-color: #224150c5;
    }

    .single-project:hover .show-info-one {
        transition: 0.5s transform;
        transform: translateY(5px);
    }

    .single-project:hover .show-info-two {
        transition: 0.5s transform;
        transform: translateY(-5px);
    }

}
</style>