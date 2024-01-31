<script>
    export default {
        data() {
            return {
                serviceCards: [
                {                
                    title:'Human Capital',
                    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut ab po',
                    path: `bi bi-people-fill`
                },
                {
                    title:'Core Business',
                    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut ab po',
                    path: `bi bi-pie-chart`
                },
                {
                    title:'Performance',
                    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut ab po',
                    path: 'bi bi-speedometer'
                }
            
                ],

                serviceCards2: [
                {
                    img:'/svgs/svg-1.svg',
                    name:'Audit & Assurance',
                    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                },
                {
                    img:'/svgs/svg-2.svg',
                    name:'Financial Advisory',
                    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                },
                {
                    img:'/svgs/svg-3.svg',
                    name:'Analytics and M&Q',
                    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                },
                {
                    img:'/svgs/svg-4.svg',
                    name:'Middle Marketing',
                    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                },
                {
                    img:'/svgs/svg-5.svg',
                    name:'Legal Consulting',
                    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                },
                {
                    img:'/svgs/svg-6.svg',
                    name:'Regular Risk',                    
                    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',                            
                }
                ],
                serviceCards3: [
                {                
                    title:'Standard',
                    price:'$ 490/mo',
                    icon: `bi bi-rocket-takeoff`,
                    list: [
                        {
                        option:'Standard Accounting',
                        check: 'bi bi-check'
                    },
                    {
                        option:'Platform Access',
                        check: 'bi bi-check'
                    },
                    {
                        option:'Personal Assistence',
                        check: 'bi bi-x'
                    },
                    {
                        option:'business Orientation',
                        check: 'bi bi-x'
                    },
                    {
                        option:'Dedicated Consultant',
                        check: 'bi bi-x'
                    }                        
                    ],

                },
                {                
                    title:'Professional',
                    price:'$ 890/mo',
                    icon: `bi bi-briefcase-fill`,
                    list: [{
                        option:'Standard Accounting',
                        check: 'bi bi-check'
                    },
                    {
                        option:'Platform Access',
                        check: 'bi bi-check'
                    },
                    {
                        option:'Personal Assistence',
                        check: 'bi bi-check'
                    },
                    {
                        option:'business Orientation',
                        check: 'bi bi-x'
                    },
                    {
                        option:'Dedicated Consultant',
                        check: 'bi bi-x'
                    }                        
                    ],
                },
                {                
                    title:'ultimate',
                    price:'$ 1390/mo',
                    icon: `class="bi bi-gem`,
                    list: [{
                        option:'Standard Accounting',
                        check: 'bi bi-check'
                    },
                    {
                        option:'Platform Access',
                        check: 'bi bi-check'
                    },
                    {
                        option:'Personal Assistence',
                        check: 'bi bi-check'
                    },
                    {
                        option:'business Orientation',
                        check: 'bi bi-check'
                    },
                    {
                        option:'Dedicated Consultant',
                        check: 'bi bi-check'
                    }                        
                    ],
                },
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
                <div v-for="(card, i) in serviceCards"
                :key="i"
                class="single-card col-4">
                    <div> {{ card.path }}</div>
                    <div>
                        <h2>{{ card.list }}</h2>
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
                :key="j"
                class="col-6 single-card2">
                    <div class="container-up d-flex justify-content-between">
                         <div class="icon filter">
                            <img :src="card2.img" :alt="card2.name">
                         </div>
                         <div>
                            <i class="bi bi-arrow-right-short"></i>
                        </div>
                    </div>
                    <div class="container-button">
                        <h3 class="d-flex">
                            {{ card2.name }}
                        </h3>
                        <p class="d-flex">
                           {{card2.text}}
                        </p>
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

                <div class="col-12">
                    <h2>
                        <strong>
                            Pricing Table
                        </strong>
                        
                    </h2>
                </div>

                <div class="col-12">
                    <p class="padding-bottom">
                        We can help you deliver and execute your future, wherever you compete, using the latest technologies, from strategy development to implementation.
                    </p>
                </div>

                <div class="row">
                    <div v-for="(card3, k) in serviceCards3" 
                    :key="k"
                    class="col-4 single-card3">

                        <div class="container-up d-flex justify-content-between">
                            <div>
                                <p id="most-popular">Più popolare</p>
                            </div>
                            <div>
                                <i class="bi bi-arrow-right-short"></i>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center">
                            <div class="icon">
                                {{ card3.icon }}
                            </div>
                        </div>
                        
                        <div class="d-flex justify-content-center">
                            <h3>
                                {{ card3.title }}
                            </h3>
                        </div>
                        <div id="price" class="d-flex justify-content-center">
                            <h2>
                                {{ card3.price }}
                            </h2>
                        </div>
                        
                        <ul class="">
                            <li v-for="(list, index) in card3.list" class="d-flex justify-content-between align-items-center text-left">
                                <div>
                                    {{ list.option }}
                                </div>
                                <div>
                                    {{ list.check }}
                                </div>
                                
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
    img {
        height: 100%;
    }
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
.filter {
    color: $color-one;
}

#container-card2 {
    background-color: #111117;
    padding-bottom: 100px;
    h5 {
        color: $color-five;
        padding-top: 100px;
    }
    h2{
        padding-top: 20px;
        padding-bottom: 10px;
        color: white;
    }
    h3{
        padding-top: 10px;
        padding-bottom: 20px;
        text-align: left;
        color: white;
    }
    p {
        color: $color-two;
    }

}
.single-card2 {
    width: calc((100% / 2) - 30px);
    background-color: #19191F;
    padding: 20px;
    margin: 15px;

    h2 {
        margin-bottom: 20px;
    }
}

//card3 

.single-card3 {
    width: calc((100% / 3) - 20px);
    background-color: white;
    padding: 20px;
    margin: 10px;
}

.container-card3 {
    background-color: #EEF4ED;
    padding-bottom: 100px;
    h5{
        padding-top: 100px;
        color: $color-five;
    }
    h2 {
        padding: 20px 0;
    }

    li {
        list-style: none;
        margin: 0 20px;
        padding: 10px;
    }
    h3 {
        padding-top: 20px;
    }
    #most-popular {
    padding-left: 20px;
    padding-right: 20px;
    background-color: $color-one;
    }
    .padding-bottom {
        padding-bottom: 20px;
    }
}
   
#price {
    color: $color-one;
}

.bi-arrow-right-short {
    color: $color-one;
    font-size: 50px;
}


</style>

