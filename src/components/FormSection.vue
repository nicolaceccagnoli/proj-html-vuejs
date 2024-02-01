<script>
import { store } from '../store';

    export default {
        data() {
            return {
                store,

                // Definisco un Array vuoto
                newInfoContainer: []
            }
            },
            methods: {
                // Richiamo un alert quando premo il pulsante delle chiamate
                faceTimeCall() {
                    alert('Devi Aprire FaceTime')
                },

                // Creo una funzione per mostrare l'Offcanvas con la Mappa
                showMapOffcanvas() {

                    // Definisco una condizione per cui se è stata aperta l'Offcanvas al tasto Search dell'Header allora cambia la Flag
                    if (this.store.showSearchOffcanvas) {
                        this.store.showSearchOffcanvas = false;
                    }

                    // Definisco una condizione per cui se è stata aperta l'Offcanvas al tasto Store dell'Header allora cambia la Flag
                    if (this.store.showShopOffcanvas) {
                        this.store.showShopOffcanvas = false;
                    }

                    // Cambio il valore della flag per mostrare la Mappa
                    this.store.showMapOffcanvas = true;
                },
            },
            mounted() {
                // Appena l'istanza viene montata in pagina assegno all'array vuoto il contenuto di infoContainer dello store
                this.newInfoContainer = this.store.infoContainer;
            },
        }
</script>


<template>

    <!-- Inizio della sezione Form -->
    <section id="form-container">

        <!-- Inizio di my-container -->
        <div class="my-container">

            <!-- Qui inizia la row che contiene sia il Form che i contatti -->
            <div class="row">

                <!-- Qui inizia la col del Form -->
                <div class="col-9">

                    <!-- Qui inizia il titolo -->
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
                    <!-- Qui finisce il titolo -->

                    <!-- Qui inizia il Form -->
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
                    <!-- Qui finisce il Form -->

                </div>
                <!-- Qui finisce la col del Form -->

                <!-- Qui inizia la col dei contatti -->
                <div id="info" class="col-3">

                    <!-- Qui inizia l'intestazione -->
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
                    <!-- Qui finisce l'intestazione -->

                    <!-- Qui iniziano i singoli contatti -->
                    <div class="row">
                        <div class="col-auto">
                            <ul>
                                <li>
                                    <a
                                    @click="faceTimeCall()"
                                    v-for="(singleInfo, i) in newInfoContainer"
                                    href="#">
                                        <div class="icon-container">
                                            <i :class="singleInfo.icon"></i>
                                        </div>
                                        <span>
                                            {{ singleInfo.info }}
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="row">
                            <div class="col-auto">
                                <button 
                                @click="showMapOffcanvas()"
                                type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                    VIEW MAP
                                </button>
                            </div>
                            <div class="col-auto">
                            </div>
                        </div>
                    </div>
                    <!-- Qui finiscono i contatti -->

                </div>
                <!-- Qui finisce la col dei contatti -->

            </div>
            <!-- Qui Finisce la row che contiene sia il Form che i contatti -->

        </div>
        <!-- Fine di my-container -->

    </section>
    <!-- Fine della sezione Form -->
    
</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
@import '../assets/scss/partials/mixins.scss';
#form-container {
    @include form-container;
    
    h3 {
        font-size: $title-3-size;
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
            background-color: $hover-btn-form-color;
            color: $color-one;
        }

        #name:hover, #phone:hover, #email:hover,
        #department:hover, #message:hover {
            transition: 0.5s;
            background-color: $hover-input-form-color;
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
                list-style: none;

                a {
                    margin: 30px 0;
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
                    color: $i-form-color;
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
            color: $hover-btn-form-color;
        }
    }
}
</style>