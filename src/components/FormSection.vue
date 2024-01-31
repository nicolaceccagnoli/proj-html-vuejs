<script>
    export default {
        data() {
            return {
            }
            },
            methods: {
                faceTimeCall() {
                    alert('Devi Aprire FaceTime')
                }
            },
            mounted() {
            },
        }
</script>


<template>
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
                                <textarea id="message" name="message" placeholder="Message" rows="7" cols="90" required></textarea>
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
                                    <a 
                                    @click="faceTimeCall()"
                                    href="#">
                                        <div class="icon-container">
                                            <i class="bi bi-telephone-fill"></i>
                                        </div>
                                        <span>
                                            +1 (305) 1234-5678
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div class="icon-container">
                                            <i class="bi bi-envelope-fill"></i>
                                        </div>
                                        <span>
                                            mail@example.com
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div class="icon-container">
                                            <i class="bi bi-geo-alt-fill"></i>
                                        </div>
                                        <span>
                                            Main Avenue, 123
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div class="icon-container">
                                            <i class="bi bi-geo-alt-fill"></i>
                                        </div>
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
    background-image: url('/public/images/geom-bg.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    padding: 100px 0;

    h3 {
        font-size: 50px;
        font-weight: 700;
        margin-top: 30px;

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
        margin: 30px 0;
    }

    form {
        #name, #phone, #email, #department, #message {
            @include input-style;
        }

        #name, #phone, #email, #department {
            width: 90%;
        }

        #message {
            width: 95%;
        }

        button {
            @include button-form-style;
        }

        button:hover {
            transition: 0.5s;
            background-color: #E3F3F2;
            color: $color-one;
        }

        #name:hover, #phone:hover, #email:hover,
        #department:hover, #message:hover {
            transition: 0.5s;
            background-color: #E8E8E8;
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
                    


                    .icon-container {
                        @include icon-container;

                        i {
                        font-size: 24px;
                    }

                    }
                }
            }

            li:hover {
                transition: color;

                a {
                    color: $color-five;
                    transition-duration: 0.5s;
                }

            }

            li:hover {
                transition: background-color;

                .icon-container {
                    background-color: $color-one;
                    transition-duration: 0.5s;
                }
            }

            li:hover {
                transition: color;

                i {
                    color: #E3F3F2;
                    transition-duration: 0.5s;
                }
            }


            
        }

        button {
            @include button-info;
        }

        button:hover {
            transition: 0.5s;
            background-color: $color-one;
            color: #E3F3F2;
        }
    }
}
</style>