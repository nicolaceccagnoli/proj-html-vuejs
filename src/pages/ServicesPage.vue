<script>
    export default {
        data() {
            return {
                serviceCards: [
                {                
                    title:'Human Capital',
                    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut ab po',
                    path: `<i class="fa-solid fa-users"></i>`
                },
                {
                    title:'Core Business',
                    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut ab po',
                    path: `<i class="fa-solid fa-chart-pie">`
                },
                {
                    title:'Performance',
                    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut ab po',
                    path: `<i class="fa-solid fa-gauge"></i>`
                }
            
                ],

                serviceCards2: [
                {
                    img:'/public/svgs/svg-1.svg',
                    name:'Audit & Assurance',
                    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut ab po',
                    path: `<i class="fa-solid fa-arrow-right"></i>`
                },
                {
                    img:'/public/svgs/svg-2.svg',
                    name:'Financial Advisory',
                    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut ab po',
                    path: `<i class="fa-solid fa-arrow-right"></i>`
                },
                {
                    img:'/public/svgs/svg-3.svg',
                    name:'Analytics and M&Q',
                    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut ab po',
                    path: `<i class="fa-solid fa-arrow-right"></i>`
                },
                {
                    img:'/public/svgs/svg-4.svg',
                    name:'Middle Marketing',
                    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut ab po',
                    path: `<i class="fa-solid fa-arrow-right"></i>`
                },
                {
                    img:'/public/svgs/svg-5.svg',
                    name:'Legal Consulting',
                    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut ab po',
                    path: `<i class="fa-solid fa-arrow-right"></i>`
                },
                {
                    img:'/public/svgs/svg-6.svg',
                    name:'Regular Risk',
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

    <div id="container-card-1">
        <div class="my-container">
            <div class="row">
                <div v-for="(card, i) in serviceCards" class="single-card col-4">
                    <div> {{ card.path }}</div>
                    <div>
                        <h2>{{ card.title }}</h2>
                        <p>{{ card.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--cards-2-->

    <div id="container-card2">
        <div class="my-container text-center">
            <div class="row d-flex">
                <div class="col-12">
                    <h5>
                        OUR BUSINESS AREAS
                    </h5>
                </div>
                <div class="col-12">
                    <h2>Excellence in Services</h2>
                </div>
                <div class="col-12">
                    <p>
                        We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of experienced and renowned professionals.These are some options that you can hire.
                    </p>
                </div>
            </div>

            <div class="row">
                <div 
                v-for="(card2, j) in serviceCards2"
                :key="j" class="col-6 single-card2">
                    <div class="container-up d-flex justify-content-between">
                         <div class="icon"></div>
                         <div class="icon"></div>
                    </div>
                    <div class="container-button">
                        <h2 class="d-flex">
                            {{ card2.name }}
                        </h2>
                        <h5 class="text-left">
                           wjk
                        </h5>
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

.single-card {
    width: calc((100% / 3) - 20px);
    border-radius: 10px;
    border: 1px solid black;
    padding: 20px;
    margin: 10px;

    h2 {
        margin-bottom: 20px;
    }
}

.single-card > * {
    padding: 10px;
}



.col-3 {
    background-color: white;
    margin: 10px;
    border-radius: 10px;
}

//card2

.single-card2 {
    width: calc((100% / 2) - 20px);
    border: 1px solid black;
    padding: 20px;
    margin: 10px;

    h2 {
        margin-bottom: 20px;
    }
}
</style>