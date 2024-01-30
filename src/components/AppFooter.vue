<script >
    export default {
        data() {
            return {
                footerTopCompany: {
                    company: [
                        "Company",
                        {
                            text: 'Institutional'
                        },
                        {
                            text: 'Social & Events'
                        },
                        {
                            text: 'Innovation'
                        },
                        {
                            text: 'Environment'
                        },
                        {
                            text: 'Technology'
                        }
                    ]
                },
                footerTopServices: {
                    services: [
                        "Services",
                        {
                            text: 'Audit & Assurance'
                        },
                        {
                            text: 'Financial Advisory'
                        },
                        {
                            text: 'Analytics M&A'
                        },
                        {
                            text: 'Middle Marketing'
                        },
                        {
                            text: 'Legal Consulting'
                        }
                    ]
                },
                footerTopConsultants: {
                    consultants: [
                        "Consultants",
                        {
                            text: 'David Cooper'
                        },
                        {
                            text: 'Oliver Jones'
                        },
                        {
                            text: 'Emma Lopez'
                        },
                        {
                            text: 'T. Johnson'
                        },
                        {
                            text: 'Jacob Hill Jr'
                        }
                    ]
                }
            }
        },
        methods: {

        }

    }
</script>

<template>
    <footer>
        <div class="footer-top">
            <div class="my-container">
                <div class="row">
                    <div class="col">
                        <div class="footer-infos d-flex flex-column">
                            <div class="img-box">
                                <img src="../../public/svgs/svg-7.svg" alt="nexgen-logo">
                            </div>
                            <p id="footer-text">
                                Built to the smallest detail with
                                a focus on feature availability.
                            </p>
                            <ul class="fa-ul ps-4">
                                <li><span class="fa-li"><i class="fa-solid fa-phone"></i></span>+1 (305) 1234-5678</li>
                                <li><span class="fa-li"><i class="fa-solid fa-envelope"></i></span>hello@example.com</li>
                                <li><span class="fa-li"><i class="fa-solid fa-location-dot"></i></span>Main Avenue, 987</li>
                            </ul>
                            <button class="btn ps-3">
                                BUY NEXGEN
                            </button>
                        </div>
                    </div>
                    <div class="col">
                        <div class="footer-card bg-color">
                            <div class="title" v-for="(elem, index) in footerTopCompany" :key="index">
                                <h4>
                                    {{ elem[0] }}
                                </h4>
                                <ul>
                                    <li v-for="(elem, index) in elem.slice(1)" :key="index">
                                        <a href="#">
                                            {{ elem.text }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="footer-card bg-color">
                            <div class="title" v-for="(elem, index) in footerTopServices" :key="index">
                                <h4>
                                    {{ elem[0] }}
                                </h4>
                                <ul>
                                    <li v-for="(elem, index) in elem.slice(1)" :key="index">
                                        <a href="#">
                                            {{ elem.text }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="footer-card bg-color">
                            <div class="title" v-for="(elem, index) in footerTopConsultants" :key="index">
                                <h4>
                                    {{ elem[0] }}
                                </h4>
                                <ul>
                                    <li v-for="(elem, index) in elem.slice(1)" :key="index">
                                        <a href="#">
                                            {{ elem.text }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="my-container">
                <div class="footer-bottom-left">
                    <p>
                        2023 - All rights reserved. Nexgen is maintained by Codings Group.
                    </p>
                </div>
                <div class="footer-bottom-right">
                    <ul>
                        <li>
                            <a href="#">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
footer{
    width: 100%;
    background-color: transparent;
    background-image: linear-gradient(45deg, #0D1B2A 35%, #1B4965 70%);

    .footer-top{
        height: 610px;
        color: $footer-text-color;
        display: flex;
        align-items: center;

        .my-container{
            width: 1200px;
        }

        .row{
            gap: 6px
        }

        .bg-color{
            background-color: #ffffff06;
        }

        .footer-infos{
            border-radius: 10px;
            padding: 15px;
            display: flex;
            justify-content: space-between;

            #footer-text{
                padding: 15px 0;
            }

            .img-box{
                width: 130px;
                padding-bottom: 10px;

                img{
                    width: 100%;
                }
            }

            ul{
                list-style: none;

                li{
                    padding: 7px ;
                    a{
                        color: $footer-text-color;
                        text-decoration: none;
                        list-style: none;

                        &:hover{
                            color: $color-five;
                        }
                    }
                }
            }

            button{
                color: lightgray;
                border: 2px solid $color-one;
                border-radius: 22px;
                max-width: 170px;
                padding: 8px 20px;
                margin: 20px 0;

                &:hover{
                    border: 2px solid white;
                    transition: 1s ease-in-out;
                    background-color: rgba(0, 0, 0, 0.2);
                }
            }
        }
        .footer-card{
            border-radius: 10px;
            padding: 25px 15px;
            display: flex;
            justify-content: space-between;
            transition: all 0.3s ease-out;

            &:hover{
                transform: translateY(-5px) scale(1.010) translateZ(0);
            }

            h4{
                color: white;
                padding: 25px 15px;
                font-weight: bold;
            }

            ul{
                list-style: none;

                li{
                    padding: 7px 18px;
                    a{
                        color: $footer-text-color;
                        text-decoration: none;
                        list-style: none;

                        &:hover{
                            color: $color-five;
                            transition: all 0.3s ease-out 0s;
                            -webkit-transition: all 0.3s ease-out 0s;
                        }
                    }
                }
            }
        }
    }

    .footer-bottom{
        height: 60px;
        background-color: rgba(255, 255, 255, 0.02);
        color: $footer-text-color;
        cursor: pointer;

        .footer-bottom-left,
        .footer-bottom-right{
            transition: all 0.3s ease-out 0s;
            -webkit-transition: all 0.3s ease-out 0s;

            &:hover{
            color: $color-five;
            }
        }

        .my-container{
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        ul{
            list-style: none;

            li{
                display: inline-block;
                padding-left: 17px;

                a{
                    text-decoration: none;
                    list-style: none;
                    color: $footer-text-color;

                    &:hover{
                    color: $color-five;
                    }
                }
            }
        }
    }
}



</style>
