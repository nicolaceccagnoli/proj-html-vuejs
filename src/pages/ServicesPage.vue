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
                    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Cum aut ab po',
                    path: `<i class="fa-solid fa-arrow-right"></i>`
                }
                ],
                serviceCards3: [
                {                
                    title:'Standard',
                    price:'$ 490/mo',
                    list: [
                        'Standard Accounting',
                        'Platform Access',
                        'business Orientation',
                        'Dedicated Consultant',
                        'Personal Assistence'
                    ],
                    icon1: '',
                    icon2: '',

                },
                {                
                    title:'Professional',
                    price:'$ 890/mo',
                    list: [
                        'Standard Accounting',
                        'Platform Access',
                        'business Orientation',
                        'Dedicated Consultant',
                        'Personal Assistence'
                    ]
                },
                {                
                    title:'ultimate',
                    price:'$ 1390/mo',
                    list: [
                        'Standard Accounting',
                        'Platform Access',
                        'business Orientation',
                        'Dedicated Consultant',
                        'Personal Assistence'
                    ]
                },
                ]
            };
        }
    }
</script>
<p>1</p>

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
        <div class="my-container" style="background-color: #EEF4ED;">
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
                    <h2>
                        <strong>
                            Excellence in Services
                        </strong>
                    </h2>
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
                        <h4 class="d-flex">
                           {{card2.text}}
                        </h4>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>

    <!--cards-3-->
    <div class="container-card3">
        <div class="my-container text-center">
            <div class="row">
                <div class="col-12">
                    <h5>
                        MONTHLY PLANS
                    </h5>                    
                </div>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti deserunt libero blanditiis nobis, aliquid adipisci facere at delectus, architecto dicta repellendus? Voluptate quasi suscipit corporis dolores ipsa quod harum non.</p>

                <div class="col-12">
                    <h2>
                        Pricing Table
                    </h2>
                </div>

                <div class="col-12">
                    <p>
                        We can help you deliver and execute your future, wherever you compete, using the latest technologies, from strategy development to implementation.
                    </p>
                </div>

                <div class="row">
                    <div v-for="(card3, k) in serviceCards3" 
                    :key="k"
                    class="col-4 single-card3">

                        <div class="container-up d-flex justify-content-between">
                            <div class="icon"></div>
                            <div class="icon"></div>
                        </div>
                        <div class="d-flex justify-content-center">
                            <div class="icon"></div>
                        </div>
                        
                        <div class="d-flex justify-content-center">
                            <h3>
                                {{ card3.title }}
                            </h3>
                        </div>
                        <div class="d-flex justify-content-center">
                            <h2>
                                {{ card3.price }}
                            </h2>
                        </div>
                        
                        <ul class="">
                            <li v-for="(list, index) in card3.list" class="d-flex justify-content-between align-items-center text-left">
                                <div>
                                    {{ list }}
                                </div>
                                <div>icon</div>
                            </li>
                        </ul>
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

#container-card-1 {
    background-color: #EEF4ED;
    padding: 100px 0;
}

.single-card {
    background-color: #FFFFFF;
    width: calc((100% / 3) - 30px);
    border-radius: 10px;
    border: 1px solid black;
    padding: 20px;
    margin: 15px;

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

#container-card2 {
    background-color: #111117;
    h5 {
        color: $color-five;
    }
    h2{
        color: white;
    }
    p {
        color: $color-two;
    }
}
.single-card2 {
    width: calc((100% / 2) - 20px);
    border: 1px solid black;
    padding: 20px;
    margin: 10px;

    h2 {
        margin-bottom: 20px;
    }
}

//card3 

.single-card3 {
    width: calc((100% / 3) - 20px);
    border: 1px solid black;
    padding: 20px;
    margin: 10px;

    h2 {
        margin-bottom: 20px;
    }

    li {
        list-style: none;
    }
}
</style>

