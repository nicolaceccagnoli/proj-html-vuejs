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

    <div id="container-card">
        <div class="container">
            <div v-for="(card, i) in serviceCards"
                :key="i" class="row d-flex justify-content-center pt-5 pb-5">
                <div>
                    <div class="col-3">
                        <div class="row">
                            <div class="col-12">
                                <div class="icon">
                                    {{ card.path }}
                                </div>                                
                            </div>
                        </div>
                        
                        <div class="col-12">
                            {{ card.title }}
                        </div>
                        <div class="col-12">
                            {{ card.text }}
                        </div>
                    </div>
                </div>
                                    
            </div> 
        </div>
    </div>

    <!--cards-2-->

    <div id="container-card2">
        <div class="container">
            <div class="row text-center">
                <div class="col-12">
                    <h5>OUR BUSINESS AREAS</h5>
                </div>
                <div class="col-12">
                    <h1>Excellence in Services</h1>
                </div>
                <div class="col-12">
                    <p>
                        We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of experienced and renowned professionals.
                        These are some options that you can hire.
                    </p>
                </div>
            </div>
            <div class="row">
                <div
                v-for="(card2, j) in serviceCards2"
                :key="j">
                    <div class="col-6" style="border: 1px solid black;">
                        <div class="row">
                            <div class="col-10">
                                {{ card2.img}}
                            </div>
                            <div class="col-2">
                                {{ card2.icon }}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <h3>{{card2.name}}</h3>
                            </div>
                            <div class="col-12">
                                <p> {{ card2.text }}</p>
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