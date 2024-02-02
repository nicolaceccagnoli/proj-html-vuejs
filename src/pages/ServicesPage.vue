<script>
    export default {
        data() {
            return {
                serviceCards: [
                {                
                    title:'Human Capital',
                    text:'Humanizing business: Harness the power of technology to improve the way people work.',
                    path: `bi bi-people-fill`
                },
                {
                    title:'Core Business',
                    text:'It takes innovative approaches to transform, modernize, and run exisiting platforms.',
                    path: `bi bi-pie-chart`
                },
                {
                    title:'Performance',
                    text:'Achieving maximum impact and value from investments in finance and supply chain',
                    path: 'bi bi-speedometer'
                }
            
                ],

                serviceCards2: [
                {
                    img:'/svgs/svg-1.svg',
                    name:'Audit & Assurance',
                    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. adipisicing elit.',
                },
                {
                    img:'/svgs/svg-2.svg',
                    name:'Financial Advisory',
                    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. adipisicing elit.',
                },
                {
                    img:'/svgs/svg-3.svg',
                    name:'Analytics and M&Q',
                    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. adipisicing elit.',
                },
                {
                    img:'/svgs/svg-4.svg',
                    name:'Middle Marketing',
                    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. adipisicing elit.',
                },
                {
                    img:'/svgs/svg-5.svg',
                    name:'Legal Consulting',
                    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. adipisicing elit.',
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
                    icon: `bi bi-rocket-takeoff-fill`,
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
                    popular: `most-popular`,
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
                    icon: `bi bi-gem`,
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
        <div class="text-center video-container">
            <video autoplay muted loop id="background-video">
                <source src="/public/videos/video.mp4" type="video/mp4">
            </video>
            <div class="services">
                <h1>
                    <strong>
                        SERVICES
                    </strong>
                </h1>
                <h3>
                    <span id="home-header">
                        home/ 
                    </span>
                    <span id="services-header">
                        services
                    </span>
                </h3>
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
                    <div class="circle d-flex align-items-center justify-content-center">
                        <div :class="card.path"></div>
                    </div>
                    
                    <div>
                        <h2>
                            <strong>
                                {{card.title }}
                            </strong>
                        </h2>
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
                        <strong>
                            OUR BUSINESS AREAS
                        </strong>                       
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
                         <div class="icon">
                            <img style="filter: brightness(0) saturate(100%) invert(38%) sepia(28%) saturate(2716%) hue-rotate(146deg) brightness(88%) contrast(96%);"
                            :src="card2.img" :alt="card2.name">
                         </div>
                         <div>
                            <i class="bi bi-arrow-right-short"></i>
                        </div>
                    </div>
                    <div class="container-button">
                        <h3 class="d-flex">
                            {{ card2.name }}
                        </h3>
                        <p id="lenght-text" class="d-flex">
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
                        <strong>
                            MONTHLY PLANS
                        </strong>                        
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
                    <p class="padding-bottom color-text2">
                        We can help you deliver and execute your future, wherever you compete, using the latest technologies, from strategy development to implementation.
                    </p>
                </div>

                <div class="row">
                    <div v-for="(card3, k) in serviceCards3" 
                    :key="k"
                    class="col-4 single-card3">

                        <div class="container-up d-flex justify-content-between">
                            <div>
                                <p class="most-popular"> {{ card3.popular }}</p>
                            </div>
                            <div>
                                <i class="bi bi-arrow-right-short"></i>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center">
                            <div :class="card3.icon">                            
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
                        
                        <ul>
                            <li v-for="(list, index) in card3.list" class="d-flex justify-content-between align-items-center text-left">
                                <div>
                                    {{ list.option }}
                                </div>
                                <i :class="list.check"></i>                                
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
    position: relative;
    height: 400px;

    #services-header {
        color: $color-one;
    }

    #home-header {
        color: white;
    }
    
    h1 {
        color: white;
        font-size: 60px;
    }
    .video-container {
        position: relative;
        overflow: hidden;
        z-index: -1;
        height: 100%;
        width: 100%;
    }

    #background-video {
        position: absolute;
        top: 50%;
        left: 50%;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        transform: translateX(-50%) translateY(-50%);
        z-index: 1;
    }
    .video-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
}

    .services {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
    }
}

.icon {
    height: 50px;
    width: 50px;
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
    padding: 20px;
    margin: 15px;

    h2 {
        margin-bottom: 20px;
    }
    .circle {
        height: 70px;
        width: 70px;
        border-radius: 100%;
        background-color: rgba(5, 130, 131, 0.2);
    }
    .bi-people-fill, .bi-pie-chart, .bi-speedometer {
        font-size: 40px;
        color: $color-one;
    }
    p {
        color: $color-two;
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
        font-size: 15px;
    }
    h2{
        padding-top: 20px;
        padding-bottom: 10px;
        color: white;
        font-size: 50px;
    }
    h3{
        padding-top: 10px;
        padding-bottom: 20px;
        text-align: left;
        color: white;
    }
    p {
        color: $color-two;
        margin-bottom: 20px;
    }
    #lenght-text {
        width: 90%;
        text-align: left;
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
    border-radius: 10px;
}

.container-card3 {
    background-color: #EEF4ED;
    padding-bottom: 100px;
    h5{
        padding-top: 100px;
        color: $color-five;
        font-size: 15px;
    }
    h2 {
        padding: 20px 0;
        font-size: 50px;
    }

    li {
        list-style: none;
        margin: 0 20px;
        padding: 10px;
    }
    h3 {
        padding-top: 20px;
    }
    .color-text2{
        color: $color-two;
    }
    
    .padding-bottom {
        padding-bottom: 20px;
    }

    .color-icon {
        height: 50px;
        color: $color-one;
    }
    .bi-gem, .bi-briefcase-fill, .bi-rocket-takeoff-fill {
        color: $color-one;
        font-size: 50px;
    }
    .bi-x, .bi-check {
        font-size: 30px;
        color: $color-one;
    }
}
   
#price {
    color: $color-one;
}

.bi-arrow-right-short {
    color: $color-one;
    font-size: 50px;
}

.most-popular {
    margin-left: -20px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #00A6A6;
    color: white;
    border-radius: 0px 5px 5px 0px;
    }

</style>

