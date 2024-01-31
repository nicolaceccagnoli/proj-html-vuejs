<script>
import Jumbotron from '../components/Jumbotron.vue';
import Excellence from '../components/Excellence.vue';
import TheCompany from '../components/TheCompany.vue';
import ActionsProject from '../components/ActionsProject.vue';
import Results from '../components/Results.vue';

    export default {
        data() {
            return {
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
                },
                mounted() {
                },
                components:{
                    Jumbotron,
                    Excellence,
                    TheCompany,
                    ActionsProject,
                    Results,
            }
        }
</script>


<template>

    <Jumbotron />

    <Excellence />

    <TheCompany />

    <ActionsProject />

    <Results />

    <div id="form-container">
        <div class="my-container">
            <div class="row">
                <div class="col-9">
                    <div class="row">
                        <div class="col-auto">
                            <h6>
                                SEND A MESSAGE
                            </h6>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <h3>
                                Get in <span> Touch </span>
                            </h3>
                        </div>
                        <div class="col-12">
                            <p>
                                We will respondo to your message as soon as possible.
                            </p>
                        </div>
                    </div>
                    <form action="#" method="POST" id="contactForm">
                        <div class="row">
                            <div class="col-6">
                                <input type="text" id="name" name="name" placeholder="Name" required>
                            </div>
                            <div class="col-6">
                                <input type="email" id="email" name="email" placeholder="Email" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <input type="tel" id="phone" name="phone" placeholder="Phone" required pattern="[0-9]{10}">
                            </div>
                            <div class="col-6">
                                <select id="department" name="department">
                                    <option selected value="">
                                       --- Please Choose an option ---
                                    </option>
                                    <option value="sales_purchasing">
                                        Sales and Purchasing
                                    </option>
                                    <option value="financial_accounts">
                                        Financial and Accounts
                                    </option>
                                    <option value="human_resources">
                                        Human Resources
                                    </option>
                                    <option value="another_subject">
                                        Another Subject
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <textarea id="message" name="message" placeholder="Message" rows="8" cols="90" required></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-auto">
                                <button type="submit">
                                    SEND
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div id="info" class="col-3">
                    <div class="row">
                        <div class="col-auto">
                            <h4>
                                Example Inc.
                            </h4>
                        </div>
                        <div class="col-12">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-auto">
                            <ul>
                                <li>
                                    <a href="#">
                                        <i class="bi bi-telephone-fill"></i>
                                        <span>
                                            +1 (305) 1234-5678
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="bi bi-envelope-fill"></i>
                                        <span>
                                            mail@example.com
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="bi bi-geo-alt-fill"></i>
                                        <span>
                                            Main Avenue, 123
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="bi bi-geo-alt-fill"></i>
                                        <span>
                                            Main Avenue 987
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="row">
                            <div class="col-auto">
                                <button>
                                    VIEW MAP
                                </button>
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
@import '../assets/scss/partials/mixins.scss';
#form-container {

    h3 {
        font-size: 50px;
        font-weight: 700;
        margin: 30px 0;

        span {
            @include main-span-style;
        }
    }

    h6 {
        margin-top: 20px;
        color: $color-five;
        font-size: 14px;
        font-weight: bold;
    }

    p {
        color: $color-two;
        margin-bottom: 30px;
    }

    form {
        #name, #phone, #email, #department, #message {
            background-color: #EFEFEF;
            border-width: 0px;
            border-radius: 5px;
            padding: 8px 16px;
            margin: 10px 0;
        }

        #name, #phone, #email, #department {
            width: 70%;
        }

        #message {
            width: 85%;
        }

        button {
            text-decoration: none;
            color: white;
            background-color: $color-one;
            border-radius: 20px;
            border: none;
            padding: 8px 24px;
            margin-bottom: 100px;
        }
    }

    #info {

        h4 {
            margin-top: 20px;
            font-weight: bold;
        }

        p {
            margin: 30px 0;
            color: $color-two;
            width: 100%;
        }

        ul {
            li {
                margin: 30px 0;
                list-style: none;

                a {
                    color: $color-one;
                    text-decoration: none;
                    display: flex;
                    align-items: center;


                    i {
                        font-size: 24px;
                    }
                }
            }
        }

        button {
            border-radius: 18px;
            border: none;
            padding: 8px 24px;
            background-color: #E3F3F2;
            color: $color-one;
        }
    }
}
</style>