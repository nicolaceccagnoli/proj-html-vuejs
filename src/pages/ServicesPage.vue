<script>
    export default {
        data() {
            return {
                serviceCards: [
                {
                    img:'',
                    name:'Audit e Garanzia',
                    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut ab po',
                    path: `<i class="fa-solid fa-arrow-right"></i>`
                },
                {
                    img:'',
                    name:'Consulente finanziario',
                    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut ab po',
                    path: `<i class="fa-solid fa-arrow-right"></i>`
                },
                {
                    img:'',
                    name:'Analisi e fusioni e acquisizioni ',
                    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut ab po',
                    path: `<i class="fa-solid fa-arrow-right"></i>`
                },
                {
                    img:'',
                    name:'Marketing medio',
                    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut ab po',
                    path: `<i class="fa-solid fa-arrow-right"></i>`
                },
                {
                    img:'',
                    name:'Consulenza legale',
                    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut ab po',
                    path: `<i class="fa-solid fa-arrow-right"></i>`
                },
                {
                    img:'',
                    name:'Rischio normativo',
                    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut ab po',
                    path: `<i class="fa-solid fa-arrow-right"></i>`
                }
                ]
            };
        }
    }
</script>


<template>

    <div id="header-service">
        <!--header-->
        <div class="d-flex justify-content-center">
            <div class="flex-column">
                <h1>SERVICES</h1>
                <h3>home/ services</h3>
            </div>     
        </div>
    </div>

    <!--cards-1-->

    <div id="container-card">
        <div class="container">
            <div class="row d-flex justify-content-center pt-5 pb-5">

                <div class="col-3">
                    <div id="card" class="container">
                        <div class="icon"><i class="fa-solid fa-users"></i></div>
                        <h4>capitale umano</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eius nobis </p>
                    </div>
                </div>

                <div class="col-3">
                    <div id="card" class="container">
                        <div class="icon"><i class="fa-solid fa-chart-pie"></i></div>
                        <h4>capitale umano</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eius nobis</p>
                    </div>
                </div>

                <div id="card" class="col-3">
                    <div class="container">
                        <div class="icon"><i class="fa-solid fa-gauge"></i></div>
                        <h4>capitale umano</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eius nobis libero</p>
                    </div>
                </div>

            </div> 
        </div>
    </div>

    <!--cards-2-->

    <div id="container-card2">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h5>le nostre aree di business</h5>
                </div>
                <div class="col-12">
                    <h1>eccellenza nei servizi</h1>
                </div>
                <div class="col-12">
                    <p>siamo leader nella fornitura di servizi di consulenza con un insieme di tecnlogie
                        all'avanguardia e un team di professionisti esperti e rinomati. Questo sono alcune opzioni che puoi assumere.
                    </p>
                </div>
            </div>
            <div class="row d-flex">
                <div
                v-for="(card, i) in serviceCards"
                :key="i">
                    <div class="col-6" style="border: 1px solid black;">
                        <div class="row">
                            <div class="col-10">img</div>
                            <div class="col-2">
                                {{ card.icon }}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <h3>{{card.name}}</h3>
                            </div>
                            <div class="col-12">
                                <p> {{ card.text }}</p>
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

#header-service {
    height: 300px;
    background-color: red;
}

.icon {
    height: 50px;
    width: 50px;
    border: 1px dashed black;
}

//card

#container-card {
    background-color: $color-three;
}

#card {
    .icon {
        margin: 20px 0;
    }

    p {
        padding: 20px 0;
    }
}

.col-3 {
    background-color: white;
    margin: 10px;
    border-radius: 10px;
}

//card2

</style>