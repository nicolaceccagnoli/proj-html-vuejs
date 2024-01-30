<script >
import { RouterLink } from 'vue-router';

    export default {
    data() {
        return {};
    },
    methods: {},
    components: { RouterLink }
}
</script>

<template>
    <header class="debug">
        <!--header top-->
        <div id="header-top" class="my-container">
            <div class="container">
                <nav>
                    <!--nav-info-->
                    <ul class="justify-content-between">
                        <li>
                            <a href="#">
                                <i class="fa-solid fa-clock"></i>
                                orari di apertura: Lun - Sab - 9:00 - 18:00
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-solid fa-phone"></i>
                                +1 123456789
                            </a>

                            <a href="#">
                                <i class="fa-solid fa-envelope"></i>
                                lorem@lorem.com
                            </a>
                            <!--loghi social-->
                            <a href="#">
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-linkedin-in"></i>
                            </a>
                        </li>                
                    </ul>
                </nav>
            </div>
            
        </div>

        <!--header button-->
        <div id="header-button" class="my-container d-flex justify-content-between align-items-center">
            <div class="container d-flex justify-content-between align-items-center">
                <!--header top-->
                <div class="container-logo">
                    logo
                </div>

                <div class="container-info d-flex align-items-center">
                     <!--form-->
                    <div class="d-flex">
                        <select class="form-control form-control ">
                            <option>demo</option>
                            <option>lorem</option>                    
                        </select>
                        <select class="form-control form-control">
                            <option>page</option>
                            <option>
                                <a href="#"><router-link :to="{ name: 'services' }">service</router-link></a>
                                
                            </option>
                        </select>
                        <select class="form-control form-control">
                            <option>portfolio</option>
                            <option>lorem</option>
                        </select>
                        <select class="form-control form-control">
                            <option>blog</option>
                            <option>lorem</option>
                        </select>
                    </div>

                     <!--links/button-->
                    <nav>
                       <ul>
                            <li>
                                <a href="#">link</a>
                                <a href="#">link</a>
                            </li>
                            <li>
                                <button>
                                    button
                                </button>
                            </li>
                       </ul>              
                    </nav>
                </div>                                                        
            </div>
        </div>           
   </header>
</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';

nav {
    ul {
        display: flex;
        list-style: none;
        justify-content: center;
    }

    a {
        margin-left:5px;
        padding: 5px;
        text-decoration: none;
    }
}

.form-control-sm {
    min-width: 30px;
    margin: 0 5px;
}

button {
    margin-left: 5px;
}

select {
    margin: 0 5px;
}
#header-top {
    background-color: $color-one;
    height: 30px;
}
    
.debug #header-button {
    background-color: rgba(0, 0, 0, 0);
    height: 50px;
}

</style>
