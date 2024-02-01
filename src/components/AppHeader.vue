<script >
import { RouterLink } from 'vue-router';
import { store } from '../store';


    export default {
    data() {
        return {
            store,
            menuDataDemo: [
                {
                title:'demo',
                subMenu: [
                    {label:'home1'},
                    {label:'home2'},
                    {label:'home3'},                    
                    ]
                }
            ],

            menuDataPage: [
                {
                title:'page ',
                subMenu: [
                    {label:'about us'},
                    {label:'services'},
                    {label:'single Service'},
                    {label:'Pricing Table'},                  
                    ]
                }
            ],

            menuDataPortfolio: [
                {
                title:'portfolio ',
                subMenu: [
                    {label:'full width'},
                    {label:'with Sidebar'},
                    {label:'single portflio'},                 
                    ]
                }
            ],

            menuDataBlog: [
                {
                title:'blog ',
                subMenu: [
                    {label:'full width'},
                    {label:'with Sidebar'},
                    {label:'single post'},                 
                    ]
                }
            ]
        };
    },
    methods: {
        showSearchOffcanvas() {

            if (this.store.showMapOffcanvas) {
                this.store.showMapOffcanvas = false
            }

            if (this.store.showShopOffcanvas) {
                this.store.showShopOffcanvas = false
            }

            this.store.showSearchOffcanvas = true;
            console.log('OFFCANVAS SEARCH')
            console.log('FLAG SEARCH',this.store.showSearchOffcanvas);
            console.log('FLAG MAPPA',this.store.showMapOffcanvas)
        },
        showShopOffcanvas() {
            if (this.store.showSearchOffcanvas) {
                this.store.showSearchOffcanvas = false;
            }

            if (this.store.showMapOffcanvas) {
                this.store.showMapOffcanvas = false;
            }

            this.store.showShopOffcanvas = true;
            
            console.log('OFFCANVAS MAPPE')
            console.log('FLAG SEARCH',this.store.showSearchOffcanvas);
            console.log('FLAG MAPPA',this.store.showMapOffcanvas)
        }
    },
    components: { RouterLink }
}
</script>

<template>
    <header class="debug">
        <!--header top-->
        <div id="header-top">
            <div class="my-container">
                <nav id="nav-header">
                    <!--nav-info-->
                    <ul>
                        <li>
                            <a href="#">
                                <i class="bi bi-clock-fill"></i>
                                orari di apertura: Lun - Sab - 9:00 - 18:00
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="bi bi-telephone-fill"></i>
                                +1 123456789
                            </a>

                            <a href="#">
                                <i class="bi bi-envelope-fill"></i>
                                lorem@lorem.com
                            </a>
                            <!--loghi social-->
                            <a href="#">
                                <i class="bi bi-facebook"></i>
                            </a>
                            <a href="#">
                                <i class="bi bi-twitter"></i>
                            </a>
                            <a href="#">
                                <i class="bi bi-linkedin"></i>
                            </a>
                        </li>                
                    </ul>
                </nav>
            </div>
            
        </div>

        <!--header button-->
        <div id="header-button" class="my-container d-flex justify-content-between">
            <div class="container d-flex justify-content-between align-items-center">
                <!--header top-->
                <div class="container-logo">
                    <router-link to="/">
                        <img src="/public/logo.png" alt="logo">
                    </router-link>
                </div>

                <div class="container-info d-flex align-items-center">

                    <!--DEMO-->
                    <div v-for="(option, i) in menuDataDemo"
                    :key="i" id="drop-down" class="d-flex">
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">
                                        {{option.title}}
                                        <i class="bi bi-arrow-down-short"></i>
                                    </a>
                                    <ul>
                                        <li v-for="(list, index) in option.subMenu">
                                            <a href="#">
                                                {{ list.label }}
                                            </a>
                                        </li>                                        
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <!--PAGE-->
                    <div v-for="(option, j) in menuDataPage"
                    :key="j"
                    id="drop-down" class="d-flex">
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">
                                        {{option.title}}
                                        <i class="bi bi-arrow-down-short"></i>
                                    </a>
                                    <ul>
                                        <li><a href="#">chi siamo</a></li>
                                        <li><a href="#">
                                            <router-link :to="{ name: 'services' }">
                                            service
                                            </router-link>
                                        </a></li>                                        
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <!--PORTFOLIO-->
                    <div v-for="(option, k) in menuDataPortfolio"
                    :key="k"
                    id="drop-down" class="">
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">
                                        {{option.title}}
                                        <i class="bi bi-arrow-down-short"></i>
                                    </a>
                                    <ul>
                                        <li v-for="(list, index) in option.subMenu">
                                            <a href="#">{{list.label}}</a>
                                        </li>                                       
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <!--BLOG-->
                    <div v-for="(option, l) in menuDataBlog"
                    :key="l"
                    id="drop-down" class="d-flex">
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">
                                        {{option.title}}
                                        <i class="bi bi-arrow-down-short"></i>
                                    </a>
                                    <ul>
                                        <li v-for="(list, index) in option.subMenu">
                                            <a href="#">
                                                {{ list.label }}
                                            </a>
                                        </li>                                        
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <!--links/button-->
                    <nav class="nav-icon">
                        <ul>
                            <li>
                                <router-link :to="{ name: 'shop' }">
                                    Shop
                                </router-link>
                            </li>
                            <li>
                                <button
                                @click="showSearchOffcanvas()"
                                type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
                                href="#">
                                    <i class="bi bi-search"></i>
                                </button>
                            </li>

                            <li>
                                <button
                                @click="showShopOffcanvas()"
                                type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
                                href="#">
                                    <i class="bi bi-handbag"></i>
                                </button>
                            </li>
                            
                            <li id="button-header">
                                <a href="#">
                                    BUY NEXGEN
                                </a>
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

#header-top {
    background-color: $color-one;
    height: 30px;
}
#header-button {
    height: 50px;
}

.bi-search, .bi-handbag {
    color: $color-two;
}
.container-logo {
    margin-top: 50px;
    height: 100px;
    width: 150px;
    img {
        width: 100%;
    }
}
nav {
    ul {
        display: flex;
        list-style: none;
        justify-content: space-between;
    }
    li {
        display: flex;
        align-items: center;
    }
    a {
        margin-left:5px;
        padding: 5px;
        text-decoration: none;
    }
}

.bi-arrow-down-short {
    font-size: 20px;
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
    
.debug #header-button {
    background-color: rgba(0, 0, 0, 0);
    
}

//drop-down
#drop-down {

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        display: inline-block;
        position: relative;
    }

    a {
        text-decoration: none;
        display: block;
        padding: 10px 20px;
        color: #BEC1CE;
    }

    a:hover {
        background-color: white;
    }

    ul ul {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: white;
        border: 1px solid #ccc;
        z-index: 2;
    }

    ul li:hover > ul {
        display: inherit;
    }

    ul ul li {
        width: 200px;
        float: none;
        display: list-item;
        position: relative;
    }

    ul ul ul li {
        position: relative;
        top: -60px;
        left: 200px;
    }
}    

</style>
